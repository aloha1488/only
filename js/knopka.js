const menuBody1 = document.querySelector('.menu1');
const menuBody2 = document.querySelector('.menu2');
const menuBody3 = document.querySelector('.menu3');
const menuBody4 = document.querySelector('.menu4');
const menuFooter1 = document.querySelector('.pages-info1');
const menuFooter2 = document.querySelector('.pages-info2');
const menuFooter3 = document.querySelector('.pages-info3');
const menuFooter4 = document.querySelector('.pages-info4');
const menuFooter5 = document.querySelector('.pages-info5');
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
	
	if (event.target.closest('.pages1')) {
		menuFooter1.classList.toggle('_active-f');
	}
	if (event.target.closest('.pages2')) {
		menuFooter2.classList.toggle('_active-f');
	}
	if (event.target.closest('.pages3')) {
		menuFooter3.classList.toggle('_active-f');
	}
	if (event.target.closest('.pages4')) {
		menuFooter4.classList.toggle('_active-f');
	}
	if (event.target.closest('.pages5')) {
		menuFooter5.classList.toggle('_active-f');
	}
	if (!event.target.closest('.pages-info1')) {
		menuFooter1.classList.remove('_active-f');
	}
	if (!event.target.closest('.pages-info2')) {
		menuFooter2.classList.remove('_active-f');
	}
	if (!event.target.closest('.pages-info3')) {
		menuFooter3.classList.remove('_active-f');
	}
	if (!event.target.closest('.pages-info4')) {
		menuFooter4.classList.remove('_active-f');
	}
	if (!event.target.closest('.pages-info5')) {
		menuFooter5.classList.remove('_active-f');
	}
	if (event.target.closest('.pages__clouse')) {
		menuFooter1.classList.remove('_active-f');
		menuFooter2.classList.remove('_active-f');
		menuFooter3.classList.remove('_active-f');
		menuFooter4.classList.remove('_active-f');
		menuFooter5.classList.remove('_active-f');
	}
}
document.addEventListener('keydown', function (e) {
	if (e.which === 27) {
		menuBody1.classList.remove('_active');
		menuBody2.classList.remove('_active');
		menuBody3.classList.remove('_active');
		menuBody4.classList.remove('_active');
		menuFooter1.classList.remove('_active-f');
		menuFooter2.classList.remove('_active-f');
		menuFooter3.classList.remove('_active-f');
		menuFooter4.classList.remove('_active-f');
		menuFooter5.classList.remove('_active-f');
	}
});