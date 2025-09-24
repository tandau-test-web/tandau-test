// ===================== Блоки с вопросами =====================
const blocks = [
  {
    name: "Архетип",
    questions: [
      {
        text: "1.Что для тебя важнее всего в жизни?",
        answers: [
          { text: "Создавать новое и уникальное", type: "Создатель" },
          { text: "Изучать и понимать неизведанное", type: "Исследователь" },
          { text: "Вести людей за собой", type: "Лидер" },
          { text: "Помогать и поддерживать других", type: "Помощник" },
          { text: "Придумывать инновации и улучшения", type: "Инноватор" },
          { text: "Делать конкретное дело и доводить до результата", type: "Практик" },
          { text: "Общаться и вдохновлять людей", type: "Коммуникатор" },
          { text: "Планировать и строить стратегии", type: "Стратег" },
          { text: "Видеть красоту и гармонию в мире", type: "Эстет" },
          { text: "Исцелять и восстанавливать", type: "Исцелитель" }
        ]
      },
      {
        text: "Когда ты сталкиваешься с проблемой, твоя первая реакция?",
        answers: [
           { text: "Придумать креативное решение", type: "Создатель" },
           { text: "Начать искать факты и информацию", type: "Исследователь" },
           { text: "Взять ответственность и организовать других", type: "Лидер" },
           { text: "Поддержать окружающих и предложить помощь", type: "Помощник" },
           { text: "Придумать новый подход, которого ещё не было", type: "Инноватор" },
           { text: "Сделать руками и попробовать самому", type: "Практик" },
           { text: "Обсудить с друзьями и услышать мнения", type: "Коммуникатор" },
           { text: "Разработать план действий", type: "Стратег" },
           { text: "Найти эстетичное, красивое решение", type: "Эстет" },
           { text: "Подумать, как исправить и улучшить состояние", type: "Исцелитель" }
        ]
      }
    ]
  },
  {
    name: "Характер",
    questions: [
      {
        text: "Как ты реагируешь на трудности?",
        answers: [
          { text: "Энергично и активно", type: "Энергичный" },
          { text: "Сохраняю спокойствие", type: "Спокойный" }
        ]
      }
    ]
  }
  // сюда потом добавишь остальные блоки: Темперамент, Интеллект, Интерес, Ценности, Образ жизни
];

// ===================== Счётчики =====================
let scores = {};

// ===================== Результаты =====================
const results = {
  "Создатель": "Ты творческий человек 🌸",
  "Исследователь": "Ты любишь узнавать новое 🔎",
  "Лидер": "У тебя лидерские качества 🎯",
  "Помощник": "Ты умеешь поддерживать других 🤝",
  "Инноватор": "Ты ищешь новое и необычное 💡",
  "Практик": "Ты ценишь реальные дела и результат 🔧",
  "Коммуникатор": "Ты легко находишь общий язык с людьми 💬",
  "Стратег": "Ты умеешь планировать и видеть наперёд 📈",
  "Эстет": "Ты ценишь красоту и гармонию 🎨",
  "Исцелитель": "Ты стремишься исцелять и помогать 💖",
  "Энергичный": "Ты действуешь быстро и энергично ⚡",
  "Спокойный": "Ты уравновешен и гармоничен ☯"
};

// ===================== Рендер вопросов =====================
function renderQuestions() {
  const container = document.getElementById("test-container");
  container.innerHTML = ""; // очищаем

  blocks.forEach(block => {
    // Заголовок блока
    const blockTitle = document.createElement("h2");
    blockTitle.textContent = block.name;
    container.appendChild(blockTitle);

    // Вопросы внутри блока
    block.questions.forEach(q => {
      const div = document.createElement("div");
      div.classList.add("question");

      const qTitle = document.createElement("h3");
      qTitle.textContent = q.text;
      div.appendChild(qTitle);

      // Ответы
      q.answers.forEach(ans => {
        const btn = document.createElement("button");
        btn.textContent = ans.text;
        btn.classList.add("link-btn");

        btn.onclick = () => {
          // Убираем подсветку со всех кнопок этого вопроса
          div.querySelectorAll("button").forEach(b => b.classList.remove("selected"));

          // Подсвечиваем выбранную кнопку
          btn.classList.add("selected");

          // Записываем результат
          scores[ans.type] = (scores[ans.type] || 0) + 1;
        };

        div.appendChild(btn);
      });

      container.appendChild(div);
    });
  });
}

// ===================== Подсчёт результата =====================
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

// ===================== Запуск =====================
document.addEventListener("DOMContentLoaded", () => {
  renderQuestions();
  document.getElementById("submit-btn").addEventListener("click", showResult);
});


