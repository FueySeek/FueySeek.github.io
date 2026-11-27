window.APP_DATA = {
  "admin": {
    "name": "示例管理员 / Demo Admin",
    "password": "password"
  },
  "settings": {
    "subject": "综合 / General",
    "examTitle": "示例试卷 / Sample Exam",
    "examSubtitle": "中英双语 · 五种题型 / Bilingual · Five Types",
    "examStartTime": "",
    "examDuration": 30,
    "totalScore": 100,
    "examQuestionCount": 0,
    "showAnswer": true,
    "randomQuestions": false,
    "randomOptions": true,
    "enableCloud": true,
    "enableGithub": false,
    "enableAudio": true,
    "audioDictation": true,
    "audioTestText": "请仔细听。 / Please listen carefully.",
    "noticeText": "1. 请保持安静。\n2. 请独立完成。\n3. 提交后不能修改。\n\n1. Keep quiet.\n2. Work independently.\n3. No changes after submission.",
    "typeOrder": ["single", "multiple", "judge", "fill", "short"],
    "typeQuotas": {
      "single": 2,
      "multiple": 1,
      "judge": 1,
      "fill": 1,
      "short": 2
    }
  },
  "questions": [
    {
      "type": "single",
      "title": "1. 以下哪个选项显示的是红色圆形？ / Which option shows a red circle?",
      "options": [
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='70'%3E%3Crect width='180' height='70' rx='10' fill='%23111827'/%3E%3Ccircle cx='38' cy='35' r='18' fill='%23ef4444'/%3E%3Ctext x='72' y='42' fill='%23ffffff' font-size='18'%3ERed Circle%3C/text%3E%3C/svg%3E",
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='70'%3E%3Crect width='180' height='70' rx='10' fill='%23111827'/%3E%3Crect x='20' y='18' width='34' height='34' fill='%233b82f6'/%3E%3Ctext x='72' y='42' fill='%23ffffff' font-size='18'%3EBlue Square%3C/text%3E%3C/svg%3E",
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='70'%3E%3Crect width='180' height='70' rx='10' fill='%23111827'/%3E%3Cpolygon points='38,16 56,52 20,52' fill='%2322c55e'/%3E%3Ctext x='72' y='42' fill='%23ffffff' font-size='18'%3EGreen Triangle%3C/text%3E%3C/svg%3E"
      ],
      "correct": 0,
      "explanation": "红色圆形对应第一个选项。 / The red circle is the first option."
    },
    {
      "type": "single",
      "title": "2. 听力题：图书馆几点开门？ / Listening: What time does the library open?",
      "audioText": "The library opens at nine in the morning. 图书馆早上九点开门。",
      "options": [
        "9:00 / 九点",
        "10:00 / 十点",
        "8:00 / 八点",
        "11:00 / 十一点"
      ],
      "correct": 0,
      "explanation": "音频说的是 nine in the morning。 / The audio says nine in the morning."
    },
    {
      "type": "multiple",
      "title": "3. 以下哪些是编程语言？ / Which of the following are programming languages?",
      "options": [
        "JavaScript",
        "HTML",
        "Python",
        "CSS"
      ],
      "correct": [0, 2],
      "explanation": "JavaScript 和 Python 是编程语言；HTML 和 CSS 是标记/样式语言。 / JavaScript and Python are programming languages."
    },
    {
      "type": "judge",
      "title": "4. 判断题：地球围绕太阳公转。 / True or false: The Earth orbits the Sun.",
      "options": [],
      "correct": 0,
      "explanation": "正确。 / True."
    },
    {
      "type": "fill",
      "title": "5. 填空：中国的首都是 ___，英国的首都是 ___。/ Fill in the blanks: The capital of China is ___, and the capital of the UK is ___.",
      "options": [],
      "correct": ["北京 / Beijing", "伦敦 / London"],
      "explanation": "北京和伦敦。 / Beijing and London."
    },
    {
      "type": "short",
      "title": "6. 阅读下面的短文，然后用中文或英文写一段不少于 50 字的读后感。\n\nRead the passage and write a response of at least 50 words in Chinese or English.\n\nA good exam is not only about memory. It should help learners connect ideas, explain their thinking, and apply knowledge to real situations. When a question asks students to explain or create, the answer becomes a window into their understanding.\n\n好的考试不只是考查记忆。它应该帮助学习者连接知识、解释思路，并把知识应用到真实情境中。当题目要求学生解释或创作时，答案就成为了解其理解程度的窗口。",
      "options": [],
      "correct": null,
      "explanation": ""
    },
    {
      "type": "short",
      "title": "7. 作文题：请以“一次难忘的学习经历”为题，写一篇不少于 120 字的短文。\n\nEssay: Write a short passage of at least 120 words about “A Memorable Learning Experience”.",
      "options": [],
      "correct": null,
      "explanation": ""
    }
  ],
  "users": [
    {
      "name": "张三 / Zhang San",
      "gender": "male",
      "uid": "001123456789",
      "verifyCode": ""
    },
    {
      "name": "李四 / Li Si",
      "gender": "female",
      "uid": "002234567890",
      "verifyCode": ""
    },
    {
      "name": "Demo Student",
      "gender": "other",
      "uid": "003345678901",
      "verifyCode": ""
    }
  ]
};
