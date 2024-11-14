// Подключение функционала "Чертоги Фрилансера"
import { isMobile, removeClasses } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const menu = document.querySelector('.menu__body');
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
  if (document.querySelector('.checkin-widget') && !targetElement.closest('.checkin-widget')) {
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

const checkinWidget = document.querySelector('.checkin-widget');
if (checkinWidget) {
  window.addEventListener('scroll', function () {
    const rect = checkinWidget.getBoundingClientRect();

    if (rect.top === 0) {
      checkinWidget.classList.add('_sticky');
    } else {
      checkinWidget.classList.remove('_sticky');
    }
  });
}

const phone = document.querySelectorAll('.input_phone');
if (phone.length > 0) {
  phone.forEach(element => {
    let iti = window.intlTelInput(element, {
      loadUtilsOnInit: "https://cdn.jsdelivr.net/npm/intl-tel-input@24.6.1/build/js/utils.js",
      initialCountry: "lv",
      separateDialCode: true
    })
  });
}

setTimeout(() => {
  document.addEventListener('scroll', function () {
    const elements = document.querySelectorAll('._to-upper');

    elements.forEach(element => {
      if (isElementInViewport(element)) {
        element.classList.add('_active');
      }
    });
  });
}, 500);

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const elementHeight = el.clientHeight;

  return (
    rect.bottom >= 0 &&
    rect.top <= windowHeight &&
    (rect.top + elementHeight * 0.1) <= windowHeight
  );
}

window.addEventListener('DOMContentLoaded', function () {
  const firstscreen = document.querySelector('._first-section-bg');
  setTimeout(() => {
    if (firstscreen) {
      showHeaderHeight();
    }
  }, 300);

  setTimeout(() => {
    const elements = document.querySelectorAll('._to-upper');

    elements.forEach(element => {
      if (isElementInViewport(element)) {
        element.classList.add('_active');
      }
    });
  }, 500);
})

window.addEventListener('load', function () {
  const firstscreen = document.querySelector('._first-section-bg');
  if (firstscreen) {
    showHeaderHeight();

    setTimeout(() => {
      showHeaderHeight();
    }, 400);
  }
})

window.addEventListener('resize', function () {
  const firstscreen = document.querySelector('._first-section-bg');

  if (firstscreen) {
    showHeaderHeight();
  }
});

