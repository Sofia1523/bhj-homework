class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.timerElement = container.querySelector('.status__timer');

    this.reset();
    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
    this.timer = 0;
    this.timerInterval = null;
  }

  registerEvents() {
    document.addEventListener('keydown', (e) => {
      const enteredSymbol = e.key;
      
      // Если введённый символ правильный
      if (enteredSymbol.toLowerCase() === this.currentSymbol.textContent.toLowerCase()) {
        this.success();
      } else {
        this.fail();
      }
    });
  }

  startTimer() {
    this.timer = this.currentWord.length;
    this.timerElement.textContent = this.timer;

    // Таймер, уменьшающийся каждую секунду
    this.timerInterval = setInterval(() => {
      this.timer--;
      this.timerElement.textContent = this.timer;
      
      if (this.timer <= 0) {
        clearInterval(this.timerInterval);
        this.fail();  // Если время истекло, считается поражение
      }
    }, 1000);
  }

  success() {
    if (this.currentSymbol.classList.contains("symbol_current")) {
      this.currentSymbol.classList.remove("symbol_current");
    }
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add('symbol_current');
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();
    this.renderWord(word);
    this.startTimer();  // Начинаем отсчёт времени для нового слова
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    this.currentWord = words[index]; // Сохраняем текущее слово для отсчёта времени
    return this.currentWord;
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current' : ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'));
