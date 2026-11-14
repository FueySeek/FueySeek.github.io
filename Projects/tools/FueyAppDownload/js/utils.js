function t(k, vars) {
    const lang = localStorage.getItem("fuey-lang") || "en";
    const row = T[k];
    if (!row) return k;
    let str = row[lang] || row["en"] || k;
    if (vars && typeof vars === "object") {
        Object.keys(vars).forEach(vk => {
            str = str.replace(new RegExp("\\{" + vk + "\\}", "g"), vars[vk]);
        });
    }
    return str;
}

function getGithubToken() {
    try { return localStorage.getItem("fuey-github-token") || ""; } catch (e) { return ""; }
}
function setGithubToken(token) {
    try {
        if (token) localStorage.setItem("fuey-github-token", token);
        else localStorage.removeItem("fuey-github-token");
    } catch (e) {}
}

function getPlatform() {
    const ua = navigator.userAgent.toLowerCase();
    if (ua.includes("android")) return "android";
    if (ua.includes("iphone") || ua.includes("ipad") || ua.includes("ipod")) return "ios";
    if (ua.includes("windows")) return "windows";
    if (ua.includes("mac os") || ua.includes("macintosh") || ua.includes("darwin")) return "macos";
    if (ua.includes("linux")) return "linux";
    return "";
}

function escapeHtml(str) {
    return String(str == null ? "" : str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function getFileKind(filename) {
    const name = String(filename || "").toLowerCase();
    const idx = name.lastIndexOf(".");
    const ext = idx >= 0 ? name.slice(idx + 1) : "";
    if (!ext) return "file";
    if (["exe","msi","msix","appx","bat","cmd","ps1","scr"].indexOf(ext) !== -1) return "windows";
    if (["apk","aab","xapk","apks","apkm"].indexOf(ext) !== -1) return "android";
    if (["ipa","dmg","pkg","app"].indexOf(ext) !== -1) return "apple";
    if (["appimage","deb","rpm","snap","flatpak","run","sh","bin"].indexOf(ext) !== -1) return "linux";
    if (["zip","rar","7z","tar","gz","bz2","xz","zst","tgz","tbz","tbz2","txz","iso","cab","lz","lzma","z","arj","ace"].indexOf(ext) !== -1) return "archive";
    return "file";
}

function fileIconHtml(filename, extraClass) {
    const kind = getFileKind(filename);
    const cls = "file-icon file-icon-" + kind + (extraClass ? " " + extraClass : "");
    return '<span class="' + cls + '">' + (FILE_ICONS[kind] || FILE_ICONS.file) + "</span>";
}

function extractVersionsFromText(text) {
    const result = { windows: "", android: "", macos: "", ios: "", linux: "" };
    ["windows", "android", "macos", "ios", "linux"].forEach(p => {
        const re = new RegExp("[\"']?" + p + "[\"']?\\s*[:=]\\s*[\"']([^\"']+)[\"']", "i");
        const m = text.match(re);
        if (m && m[1]) result[p] = m[1];
    });
    if (result.windows || result.android || result.macos || result.ios || result.linux) return result;
    try {
        const scope = { window: {} };
        new Function("window", text)(scope.window);
        const vers = scope.window.__FUEY_APP_VERSION__;
        if (vers && typeof vers === "object") {
            Object.keys(vers).forEach(p => {
                if (typeof vers[p] === "string" && vers[p]) result[p] = vers[p];
            });
        }
    } catch (e) {}
    return result;
}

async function fetchAllVersions() {
    let lastErr = null;
    for (let i = 0; i < VERSION_SOURCES.length; i++) {
        const base = VERSION_SOURCES[i];
        const url = base + (base.indexOf("?") === -1 ? "?" : "&") + "_=" + Date.now();
        try {
            const res = await fetch(url, { cache: "no-store" });
            if (!res.ok) throw new Error("HTTP " + res.status);
            const text = await res.text();
            const ver = extractVersionsFromText(text);
            const has = Object.keys(ver).some(k => ver[k]);
            if (has) return ver;
        } catch (err) { lastErr = err; }
    }
    throw lastErr || new Error("All sources failed");
}

function buildCandidateUrls(filename) {
    const urls = [];
    const rawUrl = RAW_BASE + filename;
    PREFIX_PROXIES.forEach(prefix => { urls.push(prefix + rawUrl); });
    urls.push(DIRECT_BASE + filename);
    return urls;
}

function buildMarketCandidateUrls(url) {
    const urls = [];
    if (/github\.com|githubusercontent\.com/i.test(url)) {
        PREFIX_PROXIES.forEach(prefix => { urls.push(prefix + url); });
    }
    urls.push(url);
    return urls;
}

function pingUrl(url, timeout) {
    return new Promise(resolve => {
        const start = performance.now();
        const controller = new AbortController();
        const timer = setTimeout(() => {
            try { controller.abort(); } catch (e) {}
            resolve({ url, latency: Infinity });
        }, timeout || 2000);
        fetch(url, { method: "HEAD", mode: "no-cors", cache: "no-store", signal: controller.signal })
            .then(() => { clearTimeout(timer); resolve({ url, latency: performance.now() - start }); })
            .catch(() => { clearTimeout(timer); resolve({ url, latency: Infinity }); });
    });
}

async function prewarmMirror(filename) {
    if (state.mirrorCache[filename]) return state.mirrorCache[filename];
    if (state.prewarmInFlight[filename]) return state.prewarmInFlight[filename];
    const candidates = buildCandidateUrls(filename);
    const promise = (async () => {
        try {
            const results = await Promise.all(candidates.map(u => pingUrl(u, MIRROR_PREWARM_TIMEOUT)));
            const valid = results.filter(r => r.latency < Infinity);
            valid.sort((a, b) => a.latency - b.latency);
            const best = valid.length ? valid[0].url : (DIRECT_BASE + filename);
            state.mirrorCache[filename] = best;
            return best;
        } catch (e) {
            return DIRECT_BASE + filename;
        } finally {
            delete state.prewarmInFlight[filename];
        }
    })();
    state.prewarmInFlight[filename] = promise;
    return promise;
}

function prewarmAllMirrors() {
    ["windows", "macos", "linux", "android", "ios"].forEach(p => {
        const f = (PLATFORM_META[p] && PLATFORM_META[p].file) || "";
        if (f) prewarmMirror(f);
    });
}

function fetchTimeout(url, options, timeout) {
    const controller = new AbortController();
    const timer = setTimeout(() => {
        try { controller.abort(); } catch (e) {}
    }, timeout || 8000);
    const opts = Object.assign({}, options || {}, { signal: controller.signal });
    return fetch(url, opts).finally(() => { clearTimeout(timer); });
}

function resolveUrl(raw, base) {
    if (!raw) return null;
    const s = String(raw).trim();
    if (!s) return null;
    if (/^(data:|javascript:|mailto:|tel:|#|blob:)/i.test(s)) return null;
    try {
        const u = new URL(s, base);
        if (u.protocol !== "http:" && u.protocol !== "https:") return null;
        u.hash = "";
        return u.href;
    } catch (e) { return null; }
}

function isCacheableAsset(u) {
    try {
        const url = new URL(u);
        if (url.origin === SITE_ORIGIN) return true;
        return /\.(css|js|mjs|json|png|jpe?g|gif|webp|svg|ico|woff2?|ttf|otf|eot|mp4|webm)(\?|$)/i.test(url.pathname);
    } catch (e) { return false; }
}

function formatBytes(bytes) {
    if (!bytes || bytes < 0) return "0 KB";
    if (bytes < 1024) return Math.round(bytes) + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    if (bytes < 1024 * 1024 * 1024) return (bytes / (1024 * 1024)).toFixed(1) + " MB";
    return (bytes / (1024 * 1024 * 1024)).toFixed(2) + " GB";
}

function formatDateShort(iso) {
    if (!iso) return "";
    const d = new Date(iso);
    if (isNaN(d.getTime())) return "";
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return y + "/" + m + "/" + day;
}

function base64ToUtf8(b64) {
    try {
        const binary = atob(String(b64 || "").replace(/\s/g, ""));
        const bytes = new Uint8Array(binary.length);
        for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
        return new TextDecoder("utf-8").decode(bytes);
    } catch (e) { return ""; }
}

function validateCustomFilename(name) {
    if (!name || !name.trim()) return { ok: false, key: "filenameErrorEmpty" };
    if (/[<>:"/\\|?*\x00-\x1F]/.test(name)) return { ok: false, key: "filenameErrorInvalid" };
    if (name.startsWith(".")) return { ok: false, key: "filenameErrorLeadingDot" };
    if (name.endsWith(".")) return { ok: false, key: "filenameErrorTrailingDot" };
    if (name.endsWith(" ")) return { ok: false, key: "filenameErrorTrailingSpace" };
    const baseName = name.split(".")[0].toUpperCase();
    if (RESERVED_NAMES.indexOf(baseName) !== -1) return { ok: false, key: "filenameErrorReserved" };
    if (name.length > 200) return { ok: false, key: "filenameErrorTooLong" };
    return { ok: true };
}

function getDownloadFilename(platform) {
    const meta = PLATFORM_META[platform];
    if (meta && meta.file) return meta.file;
    return platform.charAt(0).toUpperCase() + platform.slice(1) + "_Installer.bin";
}