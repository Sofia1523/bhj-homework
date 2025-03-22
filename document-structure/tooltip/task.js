document.addEventListener('DOMContentLoaded', () => {
    const tooltips = document.querySelectorAll('.has-tooltip');

    let activeTooltip = null;

    tooltips.forEach(tooltip => {
        tooltip.addEventListener('click', (event) => {
            event.preventDefault();

            // Убираем предыдущую открытую подсказку (если есть)
            if (activeTooltip) {
                activeTooltip.remove();
                activeTooltip = null;
            }

            // Создаём новый элемент подсказки
            const tooltipElement = document.createElement('div');
            tooltipElement.classList.add('tooltip');
            tooltipElement.innerText = tooltip.getAttribute('title');

            // Вставляем подсказку в документ
            document.body.appendChild(tooltipElement);

            // Определяем положение относительно элемента
            const rect = tooltip.getBoundingClientRect();
            tooltipElement.style.left = `${rect.left}px`;
            tooltipElement.style.top = `${rect.bottom}px`;

            // Добавляем класс для отображения
            tooltipElement.classList.add('tooltip_active');

            // Сохраняем активную подсказку для удаления при следующем клике
            activeTooltip = tooltipElement;

            // Закрытие подсказки при повторном клике или клике вне подсказки
            document.addEventListener('click', closeTooltip);
        });
    });

    function closeTooltip(event) {
        // Проверяем, был ли клик вне элемента или подсказки
        if (activeTooltip && !event.target.classList.contains('has-tooltip') && !activeTooltip.contains(event.target)) {
            activeTooltip.remove();
            activeTooltip = null;
            document.removeEventListener('click', closeTooltip);
        }
    }
});
