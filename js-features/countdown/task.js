// Стартовое значение таймера в секундах (например, 10 секунд)
let timeInSeconds = 10;

const timerElement = document.getElementById('timer');

// Функция для форматирования времени в формат hh:mm:ss
function formatTime(seconds) {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${secs}`;
}

// Устанавливаем начальное значение таймера
timerElement.textContent = formatTime(timeInSeconds);

// Запускаем таймер каждую секунду
const countdown = setInterval(() => {
    timeInSeconds--;
    timerElement.textContent = formatTime(timeInSeconds);

    if (timeInSeconds <= 0) {
        clearInterval(countdown);
        alert('Вы победили в конкурсе!');
    }
}, 1000);
