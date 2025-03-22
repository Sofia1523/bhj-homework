// Смена размера шрифта
const fontSizeControls = document.querySelectorAll('.font-size');
const book = document.getElementById('book');

fontSizeControls.forEach(control => {
    control.addEventListener('click', (event) => {
        event.preventDefault();

        // Убираем активный класс у всех элементов
        fontSizeControls.forEach(item => item.classList.remove('font-size_active'));

        // Добавляем активный класс текущему элементу
        control.classList.add('font-size_active');

        // Убираем старые классы размера шрифта
        book.classList.remove('book_fs-small', 'book_fs-big');

        // Добавляем новый класс в зависимости от значения data-size
        if (control.dataset.size === 'small') {
            book.classList.add('book_fs-small');
        } else if (control.dataset.size === 'big') {
            book.classList.add('book_fs-big');
        }
    });
});

// Смена цвета текста
const textColorControls = document.querySelectorAll('.book__control_color .color');

textColorControls.forEach(control => {
    control.addEventListener('click', (event) => {
        event.preventDefault();

        // Убираем активный класс у всех элементов
        textColorControls.forEach(item => item.classList.remove('color_active'));

        // Добавляем активный класс текущему элементу
        control.classList.add('color_active');

        // Убираем старые классы цвета текста
        book.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');

        // Добавляем новый класс цвета текста в зависимости от значения data-text-color
        const textColor = control.dataset.textColor;
        if (textColor) {
            book.classList.add(`book_color-${textColor}`);
        }
    });
});

// Смена цвета фона
const bgColorControls = document.querySelectorAll('.book__control_background .color');

bgColorControls.forEach(control => {
    control.addEventListener('click', (event) => {
        event.preventDefault();

        // Убираем активный класс у всех элементов
        bgColorControls.forEach(item => item.classList.remove('color_active'));

        // Добавляем активный класс текущему элементу
        control.classList.add('color_active');

        // Убираем старые классы фона
        book.classList.remove('book_bg-black', 'book_bg-gray', 'book_bg-white');

        // Добавляем новый класс фона в зависимости от значения data-bg-color
        const bgColor = control.dataset.bgColor;
        if (bgColor) {
            book.classList.add(`book_bg-${bgColor}`);
        }
    });
});
