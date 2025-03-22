document.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach((reveal) => {
        const { top, bottom } = reveal.getBoundingClientRect();

        // Проверяем, находится ли элемент в пределах окна просмотра
        if (top < window.innerHeight && bottom > 0) {
            reveal.classList.add('reveal_active');
        } else {
            reveal.classList.remove('reveal_active');
        }
    });
});
