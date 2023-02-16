"use strict"
window.addEventListener("load", windowLoad);
function windowLoad() {
	// HTML
	const htmlBlock = document.documentElement;
	// Отримуємо збережену тему
	const saveUserTheme = localStorage.getItem('user-theme');
	// Робота з системними налаштуваннями
	let userTheme;
	if (window.matchMedia) {
		userTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	}
	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
		!saveUserTheme ? changeTheme() : null;
	});
	// Зміна теми по кліку
	const themeButton = document.querySelector('.page__theme');
	const resetButton = document.querySelector('.page__reset');
	if (themeButton) {
		themeButton.addEventListener("click", function (e) {
			resetButton.classList.add('active');
			changeTheme(true);
		});
	}
	if (resetButton) {
		resetButton.addEventListener("click", function (e) {
			resetButton.classList.remove('active');
			localStorage.setItem('user-theme', '');
		});
	}
	// Функція додавання класу теми
	function setThemeClass() {
		if (saveUserTheme) {
			htmlBlock.classList.add(saveUserTheme)
			resetButton.classList.add('active');
		} else {
			htmlBlock.classList.add(userTheme);
		}
	}
	// Додаємо клас теми
	setThemeClass();
	// Функція зміни теми
	function changeTheme(saveTheme = false) {
		let currentTheme = htmlBlock.classList.contains('light') ? 'light' : 'dark';
		let newTheme;
		if (currentTheme === 'light') {
			newTheme = 'dark';
		} else if (currentTheme === 'dark') {
			newTheme = 'light';
		}
		htmlBlock.classList.remove(currentTheme);
		htmlBlock.classList.add(newTheme);
		saveTheme ? localStorage.setItem('user-theme', newTheme) : null;
	}
}

const menus = document.querySelector('.footer');
const menut = document.querySelector('.block-jump');
const menub = document.querySelector('.block-bike__top');
const menul = document.querySelector('.block-top');
document.addEventListener("click", menu);
function menu(event) {
	if (event.target.closest('.dark-theme')) {
		menus.classList.remove('_Light');
		menut.classList.remove('_Light1');
		menub.classList.remove('_Light2');
		menul.classList.remove('_Light3');
		menus.classList.toggle('_Dark');
		menut.classList.toggle('_Dark1');
		menub.classList.toggle('_Dark2');
		menul.classList.toggle('_Dark3');
	}
	if (event.target.closest('.light-theme')) {
		menus.classList.remove('_Dark');
		menut.classList.remove('_Dark1');
		menub.classList.remove('_Dark2');
		menul.classList.remove('_Dark3');
		menus.classList.toggle('_Light');
		menut.classList.toggle('_Light1');
		menub.classList.toggle('_Light2');
		menul.classList.toggle('_Light3');
	}
	if (event.target.closest('.classic-theme')) {
		menus.classList.remove('_Dark');
		menut.classList.remove('_Dark1');
		menub.classList.remove('_Dark2');
		menul.classList.remove('_Dark3');
		menus.classList.remove('_Light');
		menut.classList.remove('_Light1');
		menub.classList.remove('_Light2');
		menul.classList.remove('_Light3');
	}
}