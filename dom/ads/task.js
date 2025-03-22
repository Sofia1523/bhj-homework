document.addEventListener('DOMContentLoaded', () => {
    // Находим все ротаторы на странице
    const rotators = document.querySelectorAll('.rotator');
  
    rotators.forEach(rotator => {
      const cases = rotator.querySelectorAll('.rotator__case');
      let currentIndex = 0;
  
      // Функция для смены текста
      function rotateText() {
        // Убираем класс активности с текущего элемента
        cases[currentIndex].classList.remove('rotator__case_active');
  
        // Переход к следующему элементу (если достигнут конец — возвращаемся к первому)
        currentIndex = (currentIndex + 1) % cases.length;
  
        // Добавляем класс активности следующему элементу
        const currentCase = cases[currentIndex];
        currentCase.classList.add('rotator__case_active');
  
        // Устанавливаем цвет из data-атрибута
        currentCase.style.color = currentCase.dataset.color;
  
        // Устанавливаем новую скорость из data-атрибута (по умолчанию 1000 мс)
        const speed = currentCase.dataset.speed ? Number(currentCase.dataset.speed) : 1000;
  
        // Вызываем следующую смену текста через указанное время
        setTimeout(rotateText, speed);
      }
  
      // Устанавливаем начальные значения для первого элемента
      const firstCase = cases[currentIndex];
      firstCase.classList.add('rotator__case_active');
      firstCase.style.color = firstCase.dataset.color;
  
      // Стартуем первую смену с указанной скоростью
      const initialSpeed = firstCase.dataset.speed ? Number(firstCase.dataset.speed) : 1000;
      setTimeout(rotateText, initialSpeed);
    });
  });
  