const menuBody1 = document.querySelector('.menu1');
const menuBody2 = document.querySelector('.menu2');
const menuBody3 = document.querySelector('.menu3');
const menuBody4 = document.querySelector('.menu4');
document.addEventListener("click", menu);
function menu(event) {
	if (event.target.closest('.menu__button1')) {
		menuBody1.classList.toggle('_active');
	}
	if (!event.target.closest('.menu1')) {
		menuBody1.classList.remove('_active');
	}
	if (event.target.closest('.menu__button2')) {
		menuBody2.classList.toggle('_active');
	}
	if (!event.target.closest('.menu2')) {
		menuBody2.classList.remove('_active');
	}
	if (event.target.closest('.menu__button3')) {
		menuBody3.classList.toggle('_active');
	}
	if (!event.target.closest('.menu3')) {
		menuBody3.classList.remove('_active');
	}
	if (event.target.closest('.menu__button4')) {
		menuBody4.classList.toggle('_active');
	}
	if (!event.target.closest('.menu4')) {
		menuBody4.classList.remove('_active');
	}
}