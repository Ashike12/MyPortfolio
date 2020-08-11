const hamburger = document.querySelector('.toolbar .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.toolbar .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.toolbar .nav-bar .nav-list ul li a');
const toolbar = document.querySelector('.toolbar.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		toolbar.style.backgroundColor = '#29323c';
	} else {
		toolbar.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
