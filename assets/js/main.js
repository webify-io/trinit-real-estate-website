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
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

/*=============== VALUE ACCORDION ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SHOW SCROLL UP ===============*/

/*=============== DARK LIGHT THEME ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
