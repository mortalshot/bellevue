/* Календарь */

// Подключение функционала "Чертоги Фрилансера"
// подключение списка активных модулей
import { flsModules } from "../modules.js";

// Подключение модуля
import datepicker from 'js-datepicker';

if (document.querySelector('#checkin') && document.querySelector('#checkout')) {
	var currentDate = new Date();
	var nextDay = new Date(currentDate);
	nextDay.setDate(currentDate.getDate() + 1);

	const checkin = datepicker('#checkin', {
		// customDays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"],
		// customMonths: ["Янв", "Фев", "Март", "Апр", "Май", "Июнь", "Июль", "Авг", "Сент", "Окт", "Нояб", "Дек"],
		// overlayButton: 'Применить',
		// overlayPlaceholder: 'Год (4 цифры)',
		startDay: 1,
		dateSelected: currentDate,
		minDate: new Date(),
		formatter: (input, date, instance) => {
			const options = { month: 'short' };
			const day = date.getDate();
			const month = new Intl.DateTimeFormat('en-US', options).format(date);
			const formattedDate = `${day} ${month}`;
			input.value = formattedDate;
		},
		onSelect: function (input, instance, date) {
			setTimeout(() => {
				document.querySelector('#checkin').closest('.datepicker').classList.remove('_active');
			}, 1);
		},
		onShow: function () {
			console.log(this.calendarContainer.classList.add('qweqweqwe'));
		}
	});

	const checkout = datepicker('#checkout', {
		// customDays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"],
		// customMonths: ["Янв", "Фев", "Март", "Апр", "Май", "Июнь", "Июль", "Авг", "Сент", "Окт", "Нояб", "Дек"],
		// overlayButton: 'Применить',
		// overlayPlaceholder: 'Год (4 цифры)',
		startDay: 1,
		dateSelected: nextDay,
		minDate: new Date(),
		formatter: (input, date, instance) => {
			const options = { month: 'short' };
			const day = date.getDate();
			const month = new Intl.DateTimeFormat('en-US', options).format(date);
			const formattedDate = `${day} ${month}`;
			input.value = formattedDate;
		},
		onSelect: function (input, instance, date) {
			setTimeout(() => {
				document.querySelector('#checkout').closest('.datepicker').classList.remove('_active');
			}, 1);
		}
	});

	flsModules.datepicker = checkout;
	flsModules.datepicker = checkin;
}

if (document.querySelector('#booking-date')) {
	const bookingDate = datepicker('#booking-date', {
		// customDays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"],
		// customMonths: ["Янв", "Фев", "Март", "Апр", "Май", "Июнь", "Июль", "Авг", "Сент", "Окт", "Нояб", "Дек"],
		// overlayButton: 'Применить',
		// overlayPlaceholder: 'Год (4 цифры)',
		startDay: 1,
		dateSelected: nextDay,
		minDate: new Date(),

		formatter: (input, date, instance) => {
			const options = { month: 'short' };
			const day = date.getDate();
			const month = new Intl.DateTimeFormat('en-US', options).format(date);
			const formattedDate = `${day} ${month}`;
			input.value = formattedDate;
		},
		onSelect: function (input, instance, date) {
			setTimeout(() => {
				document.querySelector('#booking-date').closest('.datepicker').classList.remove('_active');
			}, 1);
		}
	});

	flsModules.datepicker = bookingDate;
}