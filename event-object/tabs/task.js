document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab__content');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            // Убираем активные классы у всех вкладок и содержимого
            tabs.forEach(tab => tab.classList.remove('tab_active'));
            tabContents.forEach(content => content.classList.remove('tab__content_active'));

            // Добавляем активные классы к выбранной вкладке и её содержимому
            tab.classList.add('tab_active');
            tabContents[index].classList.add('tab__content_active');
        });
    });
});
