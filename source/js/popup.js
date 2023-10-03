let body = document.querySelector('body')
let popupBg = document.querySelector('.popup-bg') // Фон попап окна
let popupWindow = document.querySelector('.popup-window') // Само окно
let openPopupButtons = document.querySelectorAll('.open-popup') // Кнопки для показа окна
let closePopupButton = document.querySelector('.close-popup') // Кнопка для скрытия окна

openPopupButtons.forEach((button) => {
	// Перебираем все кнопки
	button.addEventListener('click', (e) => {
		// Для каждой вешаем обработчик событий на клик
		e.preventDefault() // Предотвращаем дефолтное поведение браузера
		popupBg.classList.add('popup-active') // Добавляем класс 'active' для фона
		popupWindow.classList.add('popup-active') // И для самого окна
		body.classList.add('popup-lock')
	})
})

closePopupButton.addEventListener('click', () => {
	// Вешаем обработчик на крестик
	popupBg.classList.remove('popup-active') // Убираем активный класс с фона
	popupWindow.classList.remove('popup-active') // И с окна
	body.classList.remove('popup-lock')
})

document.addEventListener('click', (e) => {
	// Вешаем обработчик на весь документ
	if (e.target === popupBg) {
		// Если цель клика - фот, то:
		popupBg.classList.remove('popup-active') // Убираем активный класс с фона
		popupWindow.classList.remove('popup-active') // И с окна
		body.classList.remove('popup-lock')
	}
})
