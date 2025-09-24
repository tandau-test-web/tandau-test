// test.js

// Список вопросов (пример)
const questions = [
  {
    text: "Что тебе ближе?",
    answers: [
      { text: "Придумывать новые идеи", type: "Создатель" },
      { text: "Изучать факты и анализировать", type: "Исследователь" }
    ]
  },
  {
    text: "Как ты чаще действуешь?",
    answers: [
      { text: "Веду за собой других", type: "Лидер" },
      { text: "Поддерживаю и помогаю", type: "Помощник" }
    ]
  }
];

// Счётчики
let scores = {};

// Результаты по типам
const results = {
  "Создатель": "Ты творческий человек 🌸",
  "Исследователь": "Ты любишь узнавать новое 🔎",
  "Лидер": "У тебя лидерские качества 🎯",
  "Помощник": "Ты умеешь поддерживать других 🤝"
};

// Рендер вопросов
function renderQuestions() {
  const container = document.getElementById("test-container");
  questions.forEach((q, index) => {
    const div = document.createElement("div");
    div.classList.add("question");

    // Вопрос
    const qTitle = document.createElement("h3");
    qTitle.textContent = `${index + 1}. ${q.text}`;
    div.appendChild(qTitle);

    // Ответы
    q.answers.forEach(ans => {
      const btn = document.createElement("button");
      btn.textContent = ans.text;
      btn.classList.add("link-btn");
      btn.onclick = () => {
        scores[ans.type] = (scores[ans.type] || 0) + 1;
      };
      div.appendChild(btn);
    });

    container.appendChild(div);
  });
}

// Подсчёт результата
function showResult() {
  let maxType = null, maxScore = -1;
  for (let type in scores) {
    if (scores[type] > maxScore) {
      maxScore = scores[type];
      maxType = type;
    }
  }
  const res = results[maxType] || "Результат пока не определён.";
  document.getElementById("result").innerHTML = `<h2>${res}</h2>`;
}

// События
document.addEventListener("DOMContentLoaded", () => {
  renderQuestions();
  document.getElementById("submit-btn").addEventListener("click", showResult);
});

