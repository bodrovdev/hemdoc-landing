import Swiper from 'swiper/bundle';

//Слайдер из блока about
const about_slider = new Swiper('.about__slider', {

  direction: 'horizontal',


  navigation: {
    nextEl: '.about__slider-button--next',
    prevEl: '.about__slider-button--prev',
  },

});

//Слайдер из блока diplomas
const diplomas_slider = new Swiper('.diplomas__slider', {

  direction: 'horizontal',
  spaceBetween: 25,

  navigation: {
    nextEl: '.diplomas__slider-button--next',
    prevEl: '.diplomas__slider-button--prev',
  },

  pagination: {
    el: '.diplomas__slider-pagination',
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: "auto",
    },

    1024: {
      slidesPerView: "auto",
    },

    1366: {
      slidesPerView: "auto",
    },

    1600: {
      slidesPerView: "auto",
    },

    1800: {
      slidesPerView: "auto",
    },
  }
});

//Слайдер из блока reviews
const reviews_slider = new Swiper('.reviews__slider', {

  direction: 'horizontal',

  slidesPerView: 1,
  spaceBetween: 20,

  navigation: {
    nextEl: '.reviews__slider-button--next',
    prevEl: '.reviews__slider-button--prev',
  },

  pagination: {
    el: '.reviews__slider-pagination',
    clickable: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    }
  }

});