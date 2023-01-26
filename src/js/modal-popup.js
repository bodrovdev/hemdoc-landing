//Открытие и закрытие модального окна в блоке appointment
let modal = document.getElementById('appointment-modal');
let modalOpen = document.getElementById('appointment-modal-open');
let modalClose = document.getElementById('appointment-modal-close');
let appointmentFormReset = document.getElementById('appointment-form-reset');

function modalPopup() {
  if (modal === null) {
    return;
  }
  else {
    modalOpen.addEventListener('click', () => {
      modal.classList.add('appointment__modal--opened');
      // disableBodyScroll(modal);
    })

    modalClose.addEventListener('click', () => {
      modal.classList.remove('appointment__modal--opened');
      // enableBodyScroll(modal);
    })

    modal.addEventListener('click', (e) => {
      if (e.target !== e.currentTarget) {
        return;
      }
      else {
        modal.classList.remove('appointment__modal--opened');
        // enableBodyScroll(modal);
      }
    })

    appointmentFormReset.addEventListener('click', () => {
      modal.classList.remove('appointment__modal--opened');
      // enableBodyScroll(modal);
    })

    //Изменение цены заказа в модальном окне при переключении элементов блока тип заказа
    let appointmentTypes = document.querySelectorAll('.appointment__hidden-type');
    let appointmentPriceShown = document.getElementById('appointment-price');
    let appointmentPriceInput = document.getElementById('appointment-price-result');

    appointmentTypes.forEach((element) => {
      element.addEventListener('change', () => {
        appointmentPriceShown.textContent = element.value;
        appointmentPriceInput.value = element.value;
      })
    })

    //Изменение данных в форме оплаты при смене параметров главной формы
    let appointmentPayTarget = document.getElementById('appointment-pay-target');
    let appointmentPaySum = document.getElementById('appointment-pay-sum');

    appointmentTypes.forEach((element) => {
      element.addEventListener('change', () => {
        if (element.checked) {
          appointmentPayTarget.value = element.dataset.typename;
          appointmentPaySum.value = element.value;
        }
      })
    })
  }
}

modalPopup();