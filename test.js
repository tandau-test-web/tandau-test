// === 1. Вопросы ===
const blocks = [
  {
    name: "Архетип",
    questions: [
      {
        q: "Что для тебя важнее всего?",
        answers: [
          { text: "Создавать новое", type: "Создатель" },
          { text: "Изучать мир", type: "Исследователь" },
          { text: "Вести за собой людей", type: "Лидер" },
          { text: "Помогать другим", type: "Помощник" }
        ]
      },
      {
        q: "Как ты чаще действуешь?",
        answers: [
          { text: "Думаю нестандартно", type: "Инноватор" },
          { text: "Предпочитаю практику", type: "Практик" },
          { text: "Люблю общаться", type: "Коммуникатор" },
          { text: "Строю планы", type: "Стратег" }
        ]
      }
    ]
  },
  {
    name: "Характер",
    questions: [
      {
        q: "Как бы ты описал себя?",
        answers: [
          { text: "Энергичный", type: "Энергичный" },
          { text: "Ответственный", type: "Ответственный" },
          { text: "Поддерживающий", type: "Поддерживающий" },
          { text: "Идеатор", type: "Идеатор" }
        ]
      },
      {
        q: "Что тебе ближе?",
        answers: [
          { text: "Быть гибким", type: "Гибкий" },
          { text: "Достигать целей", type: "Целеустремлённый" }
        ]
      }
    ]
  }
];

// === 2. Счётчики ===
let scores = {};

// === 3. Результаты ===
const results = {
  "Создатель": "Ты творческий человек, придумываешь новое.",
  "Исследователь": "Тебе нравится узнавать новое.",
  "Лидер": "Ты умеешь вести за собой.",
  "Помощник": "Ты заботишься о других.",
  "Инноватор": "Ты придумываешь свежие идеи.",
  "Практик": "Ты ценишь результат.",
  "Коммуникатор": "Ты легко находишь контакт.",
  "Стратег": "Ты умеешь планировать.",
  "Энергичный": "Ты заряжаешь энергией.",
  "Ответственный": "На тебя можно положиться.",
  "Поддерживающий": "Ты создаёшь доверие.",
  "Идеатор": "У тебя много идей.",
  "Гибкий": "Ты легко адаптируешься.",
  "Целеустремлённый": "Ты идёшь к целям."
};

// === 4. Рендеринг вопросов ===
function renderTest() {
  const container = document.getElementById("test-container");
  container.innerHTML = "";

  blocks.forEach(block => {
    const blockEl = document.createElement("div");
    blockEl.classList.add("block");
    blockEl.innerHTML = `<h2>${block.name}</h2>`;

    block.questions.forEach((q, i) => {
      const qEl = document.createElement("div");
      qEl.classList.add("question");
      qEl.innerHTML = `<p>${q.q}</p>`;

      q.answers.forEach(ans => {
        const btn = document.createElement("button");
        btn.classList.add("link-btn");
        btn.textContent = ans.text;
        btn.onclick = () => chooseAnswer(ans.type, btn);
        qEl.appendChild(btn);
      });

      blockEl.appendChild(qEl);
    });

    container.appendChild(blockEl);
  });
}

// === 5. При выборе ответа ===
function chooseAnswer(type, btn) {
  scores[type] = (scores[type] || 0) + 1;

  // выделяем выбранный ответ
  btn.style.background = "#66bb6a";
  btn.style.color = "#fff";
}

// === 6. Подсчёт результата ===
function getResult() {
  let maxType = null, maxScore = -1;
  for (let t in scores) {
    if (scores[t] > maxScore) {
      maxScore = scores[t];
      maxType = t;
    }
  }
  return { type: maxType, score: maxScore };
}

// === 7. Показ результата ===
function showResult() {
  const res = getResult();
  const text = results[res.type] || "Рекомендации пока не добавлены.";
  document.getElementById("result").innerHTML = `
    <h2>Ваш результат: ${res.type}</h2>
    <p>${text}</p>
  `;
}

// === 8. Запуск ===
document.addEventListener("DOMContentLoaded", () => {
  renderTest();
  document.getElementById("submit-btn").addEventListener("click", showResult);
});

