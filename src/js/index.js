import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

//Мобильное меню
let burger = document.getElementById('burger');
let navigation = document.getElementById('main-nav');
let navigationLinks = document.querySelectorAll('.main-nav__link');

burger.addEventListener('click', () => {
  navigation.classList.toggle('main-nav--opened');
  burger.classList.toggle('headline__burger--opened');
});

burger.addEventListener('click', () => {
  if (burger.classList.contains('headline__burger--opened')) {
    disableBodyScroll(navigation);
  }
  else {
    enableBodyScroll(navigation);
  }
})

navigationLinks.forEach((element) => {
  element.addEventListener('click', () => {
    navigation.classList.remove('main-nav--opened');
    burger.classList.remove('headline__burger--opened');
    enableBodyScroll(navigation);
  });
});

//Закрытие спойлерных блоков при открытии нового
let spoilers = document.querySelectorAll('.faq__check-hidden');
function openSpoilers() {
  if (spoilers === null) {
    return;
  }
  else {
    spoilers.forEach((element) => {
      element.addEventListener('click', (e) => {
        for (let i = 0; i < spoilers.length; i++) {
          if (spoilers[i] !== e.target) {
            spoilers[i].checked = false;
          }
        }
      })
    })
  }
}
openSpoilers();

//Открытие и закрытие модального окна с отказом от ответственности в блоке appointment
let warningModalOpen = document.getElementById('warning-modal-open');
let warningModalClose = document.getElementById('warning-modal-close');
let warningModal = document.getElementById('warning-modal');

function modalWarning() {
  if (warningModal === null) {
    return;
  }
  else {
    warningModalOpen.addEventListener('click', () => {
      warningModal.classList.add('appointment__warning-modal--active');
      disableBodyScroll(warningModal);
    })

    warningModalClose.addEventListener('click', () => {
      warningModal.classList.remove('appointment__warning-modal--active');
      enableBodyScroll(warningModal);
    })

    warningModal.addEventListener('click', (e) => {
      if (e.target !== e.currentTarget) {
        return;
      }
      else {
        warningModal.classList.remove('appointment__warning-modal--active');
        enableBodyScroll(warningModal);
      }
    })
  }
}
modalWarning();

//Проверка на появление скроллбара в модальном окне с предупреждением и добавление необходимых стилей
let warningModalWrapper = document.getElementById('warning-modal-wrapper');
function isOverflown(element) {
  if (element === null) {
    return;
  }
  else if (element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth) {
    element.style.borderRadius = "22px 0 0 22px";
  }
}
isOverflown(warningModalWrapper);