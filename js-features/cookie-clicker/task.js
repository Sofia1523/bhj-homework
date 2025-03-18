const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');

let count = 0;
let lastClickTime = 0;

cookie.onclick = () => {
    // Увеличиваем счётчик кликов
    count++;
    counter.textContent = count;

    // Анимация изменения размера печеньки
    if (cookie.width === 200) {
        cookie.width = 180;
    } else {
        cookie.width = 200;
    }

    // Подсчёт скорости кликов
    const currentTime = new Date().getTime();
    if (lastClickTime !== 0) {
        const clickInterval = (currentTime - lastClickTime) / 1000;
        const clickSpeed = (1 / clickInterval).toFixed(2);

        // Отображаем скорость кликов (если хочешь добавить отображение в HTML)
        if (!document.getElementById('clicker__speed')) {
            const speedElement = document.createElement('div');
            speedElement.id = 'clicker__speed';
            speedElement.className = 'clicker__status';
            cookie.parentNode.insertBefore(speedElement, cookie.nextSibling);
        }
        document.getElementById('clicker__speed').textContent = `Скорость клика: ${clickSpeed} кликов/сек`;
    }

    lastClickTime = currentTime;
};
