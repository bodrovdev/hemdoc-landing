//Отправка формы и переход на страницу оплаты
let appointmentForm = document.getElementById('appointmentForm');

let appointmentModal = document.getElementById('appointment-modal');
let successModal = document.getElementById('success');
let successModalClose = document.getElementById('appointment-success-close');

let appointmentFormSubmitShown = document.getElementById('appointment-form-pay');
let appointmentFormSubmit = document.getElementById('appointment-form-submit');
let appointmentPayFormSubmit = document.getElementById('appointment-pay-submit');

function formSubmit() {
  if (appointmentForm === null) {
    return;
  }
  else {
    appointmentForm.addEventListener('submit', (e) => {
      e.preventDefault();

      setTimeout(appointmentPayFormSubmit.click(), 5000);

      appointmentModal.classList.remove('appointment__modal--opened');

      successModal.classList.add('appointment__success-modal--opened');
    })

    successModalClose.addEventListener('click', () => {
      successModal.classList.remove('appointment__success-modal--opened');
      // enableBodyScroll(successModal);
    })

    successModal.addEventListener('click', (e) => {
      if (e.target !== e.currentTarget) {
        return;
      }
      else {
        successModal.classList.remove('appointment__success-modal--opened');
        // enableBodyScroll(successModal);
      }
    })

    appointmentFormSubmitShown.addEventListener('click', () => {
      appointmentFormSubmit.click();
    })
  }
}

formSubmit();