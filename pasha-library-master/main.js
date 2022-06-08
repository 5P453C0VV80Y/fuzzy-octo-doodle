import {Swiper, Navigation, Autoplay} from 'swiper';

Swiper.use([Navigation, Autoplay]);
const swiper = new Swiper("#publishers-slider", {
	loop: true,
	slidesPerView: 4,
	centeredSlides: true,
	autoplay: { delay: 3000 }
});



//* modals
const allBtns = [...document.querySelectorAll('.btn')];
const modal = document.querySelector('.modal');
const backdrop = document.querySelector('.backdrop');

const modalToggler = () => {
	modal.classList.toggle('active');
	document.documentElement.classList.toggle('no-scroll');
};

backdrop.addEventListener('click', () => modalToggler());
allBtns.map(btn => btn.addEventListener('click', () => modalToggler()));