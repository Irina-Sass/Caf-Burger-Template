import './style.css';
import Swiper from 'swiper';
import Tobii from 'tobii';
import { Array } from 'core-js';

var mySwiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
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
