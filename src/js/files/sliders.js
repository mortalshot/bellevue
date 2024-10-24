/*
Документация по работе в шаблоне:
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

//Подключаем слайдер Swiper с node_modules
//При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
//Пример: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
/*
Основные модули слайдера:
Navigation, Pagination, Autoplay,
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

//Стили Swiper
//Базовые стили
import "../../scss/base/swiper.scss";
//Полный набор стилей с scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
//Полный набор стилей с node_modules
// import 'swiper/css';

//Инициализация слайдеров
function initSliders() {
	if (document.querySelector('.firstscreen__slider')) {
		new Swiper('.firstscreen__slider', {
			modules: [Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			speed: 800,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},

			/* navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			}, */
			/*
			// Брейкпоинты
			breakpoints: {
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
			},
			*/
			// События
			on: {

			}
		});
	}

	if (document.querySelector('.special-offers__slider')) {
		new Swiper('.special-offers__slider', {
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 30,
			speed: 800,
			loop: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/* pagination: {
				el: '.swiper-pagination',
				clickable: true,
			}, */

			navigation: {
				prevEl: '.special-offers .swiper-arrow_prev',
				nextEl: '.special-offers .swiper-arrow_next',
			},

			// Брейкпоинты
			breakpoints: {
				834: {
					slidesPerView: 1,
					spaceBetween: 30,
				},
				1024: {
					slidesPerView: 1.48,
					spaceBetween: 0,
				},
				1280: {
					slidesPerView: 1.65,
					spaceBetween: 0,
				},
			},

			// События
			on: {

			}
		});
	}

	if (document.querySelector('.rooms-suites__slider')) {
		new Swiper('.rooms-suites__slider', {
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 30,
			speed: 1000,
			loop: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/* pagination: {
				el: '.swiper-pagination',
				clickable: true,
			}, */

			navigation: {
				prevEl: '.rooms-suites__slider .swiper-arrow_prev',
				nextEl: '.rooms-suites__slider .swiper-arrow_next',
			},

			// Брейкпоинты
			breakpoints: {
				1024: {
					slidesPerView: 1.3,
					spaceBetween: 0,
				},
				1280: {
					slidesPerView: 1.3,
					spaceBetween: 0,
				},
				1440: {
					slidesPerView: 1.4,
					spaceBetween: 0,
				},
			},

			// События
			on: {

			}
		});
	}

	if (document.querySelector('.features-tabs__slider')) {
		new Swiper('.features-tabs__slider', {
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 30,
			speed: 1000,
			loop: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/* pagination: {
				el: '.swiper-pagination',
				clickable: true,
			}, */

			navigation: {
				prevEl: '.features-tabs__slider .swiper-arrow_prev',
				nextEl: '.features-tabs__slider .swiper-arrow_next',
			},

			// Брейкпоинты
			breakpoints: {
			/* 	1024: {
					slidesPerView: 1.3,
					spaceBetween: 0,
				}, */
			},

			// События
			on: {

			}
		});
	}

	if (document.querySelector('.gallery__slider')) {
		new Swiper('.gallery__slider', {
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1.4,
			spaceBetween: 15,
			speed: 1000,
			centeredSlides: true,
			initialSlide: 0,
			loop: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/* pagination: {
				el: '.swiper-pagination',
				clickable: true,
			}, */

			navigation: {
				prevEl: '.gallery__slider .swiper-arrow_prev',
				nextEl: '.gallery__slider .swiper-arrow_next',
			},

			// Брейкпоинты
			breakpoints: {
				834: {
					slidesPerView: 1.61,
					spaceBetween: 30,
				},
				1024: {
					slidesPerView: 2.7,
					spaceBetween: 16,
				},
				1320: {
					slidesPerView: 2.7,
					spaceBetween: 30,
				},
			},

			// События
			on: {

			}
		});
	}

	if (document.querySelector('.additional__slider')) {
		new Swiper('.additional__slider', {
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1.33,
			spaceBetween: 24,
			speed: 1000,
			loop: false,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/* pagination: {
				el: '.swiper-pagination',
				clickable: true,
			}, */

			navigation: {
				prevEl: '.additional .swiper-arrow_prev',
				nextEl: '.additional .swiper-arrow_next',
			},

			// Брейкпоинты
			breakpoints: {
				575: {
					slidesPerView: 2.5,
					spaceBetween: 12,
				},
				834: {
					slidesPerView: 2.5,
					spaceBetween: 30,
				},
				1024: {
					slidesPerView: 4,
					spaceBetween: 16,
				},
				1320: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},

			// События
			on: {

			}
		});
	}
}
//Скролл на базе слайдера (по классу swiper scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	//Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});