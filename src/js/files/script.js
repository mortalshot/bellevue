// Подключение функционала "Чертоги Фрилансера"
import { isMobile, removeClasses } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const menu = document.querySelector('.header__menu');
if (menu && window.innerWidth >= 768 && !isMobile.any()) {
  menu.addEventListener('mouseenter', function (e) {
    document.documentElement.classList.add('menu-open');
  })
  menu.addEventListener('mouseleave', function (e) {
    document.documentElement.classList.remove('menu-open');
  })
}

function showHeaderHeight() {
  const header = document.querySelector('.header');

  if (header) {
    let headerHeight = getComputedStyle(header).height;
    let calcHeight = parseFloat(headerHeight);

    document.documentElement.style.setProperty('--header-height', `${calcHeight}px`);
  }
}

document.addEventListener('click', function (e) {
  const targetElement = e.target;
  if (targetElement.closest('.datepicker')) {
    targetElement.closest('.datepicker').classList.add('_active');
  }
  if (!targetElement.closest('.datepicker') && document.querySelectorAll('.datepicker._active').length > 0) {
    removeClasses(document.querySelectorAll('.datepicker._active'), "_active");
  }

  if (targetElement.closest('.checkin-widget__button .btn')) {
    const closest = targetElement.closest('.checkin-widget');
    closest.classList.toggle('_active');
  }
  if (targetElement.closest('.checkin-widget__close')) {
    const closest = targetElement.closest('.checkin-widget');
    closest.classList.remove('_active');
  }
  if (!targetElement.closest('.checkin-widget')) {
    document.querySelector('.checkin-widget').classList.remove('_active');
  }
})

// Показываем кнопку вверх
const above = document.querySelector('.above');
if (above) {
  let scrollDirection = 0;
  window.addEventListener('scroll', function (e) {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 1000 && scrollTop < scrollDirection) {
      above.classList.add('_show');
    } else {
      above.classList.remove('_show');
    }

    scrollDirection = scrollTop <= 0 ? 0 : scrollTop;
  });
}

window.addEventListener('DOMContentLoaded', function () {
  const firstscreen = document.querySelector('._first-section-bg');
  setTimeout(() => {
    if (firstscreen) {
      showHeaderHeight();
    }
  }, 300);
})

window.addEventListener('resize', function () {
  const firstscreen = document.querySelector('._first-section-bg');

  if (firstscreen) {
    showHeaderHeight();
  }
});