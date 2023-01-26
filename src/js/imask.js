import IMask from 'imask';

let element = document.getElementById('appointment-phone');
function maskFunc() {
  if (element === null) {
    return;
  }
  else {
    let maskOptions = {
      mask: '+{7} (000) 000-00-00',
    };

    let mask = IMask(element, maskOptions);
  }
}
maskFunc();