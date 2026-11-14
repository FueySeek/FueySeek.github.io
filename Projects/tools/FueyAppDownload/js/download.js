let dlSpeedSamples = [];

function setDlLabel(text, type) {
    const label = document.getElementById("dlProgressLabel");
    if (!label) return;
    label.classList.remove("done", "error");
    if (type === "done") label.classList.add("done");
    else if (type === "error") label.classList.add("error");
    label.textContent = text;
}

function setDlStatus(text) {
    const el = document.getElementById("dlStatusText");
    if (el) el.textContent = text;
}

function showDownloadOverlay(text) {
    const ov = document.getElementById("downloadOverlay");
    const fill = document.getElementById("dlProgressFill");
    const dlStage = document.getElementById("dlDownloadingStage");
    const doneStage = document.getElementById("dlDoneStage");
    if (fill) { fill.style.width = "0%"; fill.style.left = "-40%"; }
    setDlLabel(text || "");
    setDlStatus("");
    if (dlStage) dlStage.style.display = "";
    if (doneStage) doneStage.classList.remove("show");
    if (ov) { ov.classList.add("indeterminate"); ov.classList.add("show"); }
}

function recordSpeed(bytes) {
    const now = performance.now();
    dlSpeedSamples.push({ bytes, time: now });
    const cutoff = now - 1500;
    while (dlSpeedSamples.length > 2 && dlSpeedSamples[0].time < cutoff) dlSpeedSamples.shift();
}

function getCurrentSpeed() {
    if (dlSpeedSamples.length < 2) return 0;
    const first = dlSpeedSamples[0];
    const last = dlSpeedSamples[dlSpeedSamples.length - 1];
    const dt = (last.time - first.time) / 1000;
    if (dt <= 0) return 0;
    return (last.bytes - first.bytes) / dt;
}

function computeEta(total, recv, speed) {
    if (!total || total <= 0) return "--:--";
    if (!speed || speed <= 0) return "--:--";
    const remain = Math.max(0, total - recv);
    if (remain <= 0) return "0:00";
    const sec = Math.ceil(remain / speed);
    if (sec < 60) return sec + "s";
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    if (m < 60) return m + ":" + String(s).padStart(2, "0");
    const h = Math.floor(m / 60);
    const mm = m % 60;
    return h + ":" + String(mm).padStart(2, "0") + ":" + String(s).padStart(2, "0");
}

function setDlProgress(recv, total) {
    const ov = document.getElementById("downloadOverlay");
    const fill = document.getElementById("dlProgressFill");
    if (ov && ov.classList.contains("indeterminate")) {
        ov.classList.remove("indeterminate");
        if (fill) { fill.style.left = "0"; fill.style.width = "0%"; }
        setDlLabel(t("downloading") + ". . .");
    }
    const pct = total > 0 ? Math.min(99, Math.max(0, recv / total * 100)) : 0;
    requestAnimationFrame(() => { if (total > 0 && fill) fill.style.width = pct + "%"; });
    recordSpeed(recv);
    const speed = getCurrentSpeed();
    setDlStatus(t("downloadFmt", {
        speed: formatBytes(speed),
        recv: formatBytes(recv),
        total: total > 0 ? formatBytes(total) : "?",
        eta: computeEta(total, recv, speed)
    }));
}

function showDoneStage(filename) {
    state.lastDownloadName = filename;
    const dlStage = document.getElementById("dlDownloadingStage");
    const doneStage = document.getElementById("dlDoneStage");
    const iconEl = document.getElementById("dlDoneIcon");
    const title = document.getElementById("dlDoneTitle");
    const pathLabel = document.getElementById("dlDonePathLabel");
    const pathValue = document.getElementById("dlDonePathValue");
    const hint = document.getElementById("dlDoneHint");
    const redlBtn = document.getElementById("dlRedownloadBtn");
    const backBtn = document.getElementById("dlBackBtn");

    if (dlStage) dlStage.style.display = "none";
    if (doneStage) doneStage.classList.add("show");

    if (iconEl) {
        iconEl.className = "dl-done-icon";
        iconEl.innerHTML = ICONS.check;
    }

    if (title) title.textContent = t("installTitle");
    if (pathLabel) pathLabel.textContent = t("installPathLabel");
    if (pathValue) pathValue.textContent = filename;
    if (hint) hint.textContent = t("installHint");

    if (backBtn) {
        backBtn.textContent = t("doneBackBtn");
        backBtn.onclick = function () { hideDownloadOverlay(); };
    }

    if (redlBtn) {
        redlBtn.textContent = t("redownloadText");
        redlBtn.style.display = "";
        redlBtn.onclick = function () {
            const url = state.lastDownloadUrl;
            const name = state.lastDownloadName;
            const size = state.lastDownloadSize || 0;
            hideDownloadOverlay();
            if (url && name) {
                setTimeout(() => startMarketDownload(url, name, size), 300);
            }
        };
    }
}

function hideDownloadOverlay() {
    const ov = document.getElementById("downloadOverlay");
    if (!ov) return;
    ov.classList.remove("show");
    setTimeout(() => {
        ov.classList.remove("indeterminate");
        const fill = document.getElementById("dlProgressFill");
        if (fill) { fill.style.width = "0%"; fill.style.left = "-40%"; }
        dlSpeedSamples = [];
        const dlStage = document.getElementById("dlDownloadingStage");
        const doneStage = document.getElementById("dlDoneStage");
        if (dlStage) dlStage.style.display = "";
        if (doneStage) doneStage.classList.remove("show");
        const label = document.getElementById("dlProgressLabel");
        if (label) { label.classList.remove("done", "error"); label.textContent = ""; }
        setDlStatus("");
        state.lastDownloadBlob = null;
        state.lastDownloadName = null;
        state.lastDownloadUrl = null;
        state.lastDownloadSize = 0;
    }, 400);
}

async function downloadWithProgress(url, onProgress, idleTimeout) {
    const controller = new AbortController();
    let lastActivity = Date.now();
    const watchdog = setInterval(() => {
        if (Date.now() - lastActivity > (idleTimeout || DOWNLOAD_IDLE_TIMEOUT)) {
            try { controller.abort(); } catch (e) {}
            clearInterval(watchdog);
        }
    }, 1000);
    try {
        const res = await fetch(url, { cache: "no-store", redirect: "follow", signal: controller.signal });
        if (!res.ok) throw new Error("HTTP " + res.status);
        const ct = (res.headers.get("content-type") || "").toLowerCase();
        if (ct.includes("text/html") || ct.includes("application/json")) throw new Error("INVALID_CONTENT_TYPE");
        const rawLen = res.headers.get("content-length");
        const total = rawLen ? Number(rawLen) : 0;
        if (!res.body || typeof res.body.getReader !== "function") {
            const blob = await res.blob();
            if (total > 0 && blob.size !== total) throw new Error("INCOMPLETE");
            if (onProgress) onProgress(blob.size, blob.size);
            return { blob: blob, total: total, received: blob.size };
        }
        const reader = res.body.getReader();
        const chunks = [];
        let received = 0;
        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            lastActivity = Date.now();
            chunks.push(value);
            received += value.length;
            if (onProgress) onProgress(received, total > 0 ? total : received);
        }
        if (received === 0) throw new Error("EMPTY");
        if (total > 0 && received !== total) throw new Error("INCOMPLETE");
        return { blob: new Blob(chunks), total: total, received: received };
    } finally {
        clearInterval(watchdog);
    }
}

function saveBlob(blob, filename) {
    if (!blob || !filename) return;
    try {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        a.rel = "noopener";
        a.style.display = "none";
        document.body.appendChild(a);
        try { a.click(); } catch (e) {}
        setTimeout(() => {
            if (a.parentNode) a.parentNode.removeChild(a);
            try { URL.revokeObjectURL(url); } catch (e) {}
        }, 4000);
    } catch (e) {}
}

function fallbackDownload(url, filename) {
    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    if (filename) a.download = filename;
    a.style.display = "none";
    document.body.appendChild(a);
    try { a.click(); } catch (e) {}
    setTimeout(() => { if (a.parentNode) a.parentNode.removeChild(a); }, 500);
}

function updateDownloadBtns() {
    document.querySelectorAll(".platform-dl-btn").forEach(btn => {
        if (state.downloadBusy) { btn.disabled = true; return; }
        const platform = btn.dataset.platform;
        const ver = state.cloudVersions[platform];
        const ready = !state.versionLoadFailed && !!ver;
        btn.disabled = !ready;
        btn.textContent = ready ? t("downloadBtn") : (state.versionLoadFailed ? t("unavailableBtn") : t("checkingVersion"));
    });
}

async function pingUrl(url, timeout) {
    return new Promise(resolve => {
        const start = performance.now();
        const controller = new AbortController();
        const timer = setTimeout(() => {
            try { controller.abort(); } catch (e) {}
            resolve({ url: url, latency: Infinity });
        }, timeout || 2000);
        fetch(url, { method: "HEAD", mode: "no-cors", cache: "no-store", signal: controller.signal })
            .then(() => { clearTimeout(timer); resolve({ url: url, latency: performance.now() - start }); })
            .catch(() => { clearTimeout(timer); resolve({ url: url, latency: Infinity }); });
    });
}

async function pingAllNodes(filename) {
    const candidates = buildCandidateUrls(filename);
    const results = await Promise.all(candidates.map(u => pingUrl(u, 2000)));
    const valid = results.filter(r => r.latency < Infinity);
    valid.sort((a, b) => a.latency - b.latency);
    return valid.map(r => r.url);
}

async function startFueyDownload(platform) {
    if (state.downloadBusy) return;
    const filename = getDownloadFilename(platform);
    if (!filename) return;
    state.downloadBusy = true;
    updateDownloadBtns();
    const directUrl = DIRECT_BASE + filename;
    dlSpeedSamples = [];
    state.lastDownloadUrl = directUrl;
    state.lastDownloadSize = 0;
    showDownloadOverlay(t("preparing") + ". . .");
    let ordered = [];
    try { ordered = await pingAllNodes(filename); } catch (err) { ordered = []; }
    if (ordered.indexOf(directUrl) === -1) ordered.push(directUrl);
    let success = false;
    let lastError = null;
    let finalBlob = null;
    for (let i = 0; i < ordered.length; i++) {
        try {
            const result = await downloadWithProgress(ordered[i], (recv, total) => setDlProgress(recv, total), DOWNLOAD_IDLE_TIMEOUT);
            if (!result.blob || !result.blob.size) throw new Error("EMPTY");
            finalBlob = result.blob;
            success = true;
            break;
        } catch (err) { lastError = err; continue; }
    }
    if (success) {
        setDlLabel(t("downloadDone"), "done");
        setDlStatus("");
        saveBlob(finalBlob, filename);
        setTimeout(() => { showDoneStage(filename); }, 400);
    } else {
        setDlLabel(t("downloadFailed"), "error");
        setDlStatus(lastError && lastError.message ? lastError.message : "");
        setTimeout(() => {
            fallbackDownload(directUrl, filename);
            showDoneStage(filename);
        }, 1200);
    }
    setTimeout(() => { state.downloadBusy = false; updateDownloadBtns(); }, 2000);
}

async function startMarketDownload(url, filename, expectedSize) {
    if (state.downloadBusy) return;
    if (!url) return;
    state.downloadBusy = true;
    updateDownloadBtns();
    renderCustom();
    dlSpeedSamples = [];
    state.lastDownloadUrl = url;
    state.lastDownloadSize = expectedSize || 0;
    showDownloadOverlay(t("preparing") + ". . .");
    const candidates = buildMarketCandidateUrls(url);
    let success = false;
    let lastError = null;
    let finalBlob = null;
    for (let i = 0; i < candidates.length; i++) {
        try {
            const result = await downloadWithProgress(candidates[i], (recv, total) => setDlProgress(recv, total), DOWNLOAD_IDLE_TIMEOUT);
            if (!result.blob || !result.blob.size) throw new Error("EMPTY");
            if (expectedSize && expectedSize > 0 && result.received !== expectedSize) throw new Error("INCOMPLETE");
            finalBlob = result.blob;
            success = true;
            break;
        } catch (err) { lastError = err; continue; }
    }
    if (success) {
        setDlLabel(t("downloadDone"), "done");
        setDlStatus("");
        saveBlob(finalBlob, filename);
        setTimeout(() => { showDoneStage(filename); }, 400);
    } else {
        setDlLabel(t("downloadFailed"), "error");
        setDlStatus(lastError && lastError.message ? lastError.message : "");
        setTimeout(() => {
            fallbackDownload(url, filename);
            showDoneStage(filename);
        }, 1200);
    }
    setTimeout(() => { state.downloadBusy = false; updateDownloadBtns(); renderCustom(); }, 2000);
}