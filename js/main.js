/*=============== CHANGE BACKGROUND HEADER ===============*/

/* function scrollHeader() {
	const header = document.getElementById('header');
	// Add a class if the bottom offset is greater than 50 of the viewport
	if (this.scrollY >= 50) header.classList.add('scroll-header');
	header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader); */

const scrollHeader = () => {
	const header = document.getElementById('header');
	// Add a class if the bottom offset is greater than 50 of the viewport
	this.scrollY >= 50
		? header.classList.add('scroll-header')
		: header.classList.remove('scroll-header');
};
window.addEventListener('scroll', scrollHeader);

/*=============== SWIPER POPULAR ===============*/
var swiperPopular = new Swiper('.popular-container', {
	spaceBetween: 32,
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: 'auto',
	loop: true,

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

/*=============== VALUE ACCORDION ===============*/
const accordianItems = document.querySelectorAll('.value-accordian-item');

accordianItems.forEach((item) => {
	const accordianHeader = item.querySelector('.value-accordian-header');

	accordianHeader.addEventListener('click', () => {
		const openItem = document.querySelector('.accordian-open');

		toggleItem(item);

		if (openItem && openItem !== item) {
			toggleItem(openItem);
		}
	});
});

const toggleItem = (item) => {
	const accordianContent = item.querySelector('.value-accordian-content');

	if (item.classList.contains('accordian-open')) {
		accordianContent.removeAttribute('style');
		item.classList.remove('accordian-open');
	} else {
		accordianContent.style.height = accordianContent.scrollHeight + 'px';
		item.classList.add('accordian-open');
	}
};

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
	const scrollDown = window.scrollY;

	sections.forEach((current) => {
		const sectionHeight = current.offsetHeight,
			sectionTop = current.offsetTop - 58,
			sectionId = current.getAttribute('id'),
			sectionsClass = document.querySelector(
				'.nav-menu a[href*=' + sectionId + ']'
			);

		if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
			sectionsClass.classList.add('active-link');
		} else {
			sectionsClass.classList.remove('active-link');
		}
	});
};
window.addEventListener('scroll', scrollActive);

/*=============== SHOW SCROLL UP ===============*/

/*=============== DARK LIGHT THEME ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
