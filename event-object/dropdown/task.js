// Получаем все элементы с классом dropdown
const dropdowns = document.querySelectorAll('.dropdown');

// Обрабатываем каждый dropdown
dropdowns.forEach(dropdown => {
    const dropdownValue = dropdown.querySelector('.dropdown__value');
    const dropdownList = dropdown.querySelector('.dropdown__list');
    const dropdownItems = dropdown.querySelectorAll('.dropdown__item');

    // Обработчик для клика по кнопке
    dropdownValue.addEventListener('click', (e) => {
        e.preventDefault();  // Отменяем переход по ссылке
        dropdownList.classList.toggle('dropdown__list_active');  // Переключаем видимость списка
    });

    // Обработчик для кликов по элементам списка
    dropdownItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();  // Отменяем переход по ссылке
            dropdownValue.textContent = item.textContent;  // Обновляем текст в кнопке
            dropdownList.classList.remove('dropdown__list_active');  // Закрываем список
        });
    });
});
