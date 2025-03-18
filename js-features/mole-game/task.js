// 👉 Получаем элементы для счётчика попаданий и промахов
const deadCounter = document.getElementById('dead');
const lostCounter = document.getElementById('lost');

let score = 0; // Попадания
let misses = 0; // Промахи

// 👉 Получаем доступ к лунке по индексу
const getHole = index => document.getElementById(`hole${index}`);

// 👉 Добавляем обработчик событий на все лунки
for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = () => {
        if (getHole(i).classList.contains('hole_has-mole')) {
            // Попадание в крота
            score++;
            deadCounter.textContent = score;
        } else {
            // Промах
            misses++;
            lostCounter.textContent = misses;
        }

        // 👉 Условие победы
        if (score === 10) {
            alert('🏆 Победа! Ты поймал 10 кротов!');
            resetGame();
        }

        // 👉 Условие поражения
        if (misses === 5) {
            alert('😢 Поражение! Слишком много промахов.');
            resetGame();
        }
    };
}

// 👉 Функция для сброса игры
const resetGame = () => {
    score = 0;
    misses = 0;
    deadCounter.textContent = score;
    lostCounter.textContent = misses;
};
