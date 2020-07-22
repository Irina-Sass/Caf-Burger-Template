import './style.css';
import Swiper from 'swiper';
import Tobii from 'tobii';
import { formatDateFull } from './js/utils.js';
import { Api } from './js/Api.js';
import { Form } from './js/Form.js';
import { Scroll } from './js/Scroll.js';

var specialtiesSwiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  loop: true,
});

var menuSwiper = new Swiper('.swiper-container-menu', {
  pagination: {
    el: '.swiper-pagination-menu',
    clickable: true,

    renderBullet: function (index, className) {
      const menuArr = Array.from(
        document.querySelectorAll('.menu__content')
      ).map(function (item) {
        return item.dataset.name;
      });
      return '<span class="' + className + '">' + menuArr[index] + '</span>';
    },
    bulletClass: 'swiper-pagination-menu-bullet',
    bulletActiveClass: 'swiper-pagination-menu-bullet-active',
  },
});

const tobii = new Tobii({
  captions: false,
});

const date = document.querySelector('.booking__input-date');
const bookingFormElem = document.querySelector('.booking__form');
const contactsFormElem = document.querySelector('.contacts__form');

function submitForm(form) {
  const formError = document.querySelector(`#error-${form.id}`);
  const formMessage = document.querySelector(`#message-${form.id}`);
  formError.style.display = 'none';
  api
    .sendData(new FormData(form), form.action)
    .then((res) => {
      form.style.display = 'none';
      formMessage.style.display = 'flex';
    })
    .catch((err) => {
      formError.style.display = 'block';
    });
}

const api = new Api();
const bookingForm = new Form(bookingFormElem, submitForm);
const contactsForm = new Form(contactsFormElem, submitForm);

date.setAttribute('min', formatDateFull());
const smoothLinks = document.querySelectorAll('a[href^="#"]');
const scroll = new Scroll(smoothLinks);
