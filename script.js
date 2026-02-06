// Отправка формы
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Отключаем стандартную отправку
    alert('Спасибо! Ваше сообщение отправлено.');
    // Сброс формы
    this.reset();
});
