let attachInput = document.getElementById('attachInput');
let attachButton = document.getElementById('attach-button');
let attachList = document.getElementById('attach-list');

function fileUpload() {
  if (attachInput === null || attachButton === null || attachList === null) {
    return;
  }
  else {
    let files = [];
    function addItem(event) {
      if (event.target.files.length > 10) {
        alert('Не более 10 изображений!');
        attachInput.value = '';
        return;
      }
      else {
        let filesSize = 0;

        Array.from(event.target.files).forEach(file => {
          filesSize += file.size;
        })
        if (filesSize >= 20971520) {
          alert('Общий размер файлов не должен превышать 20 мегабайт!');
          attachInput.value = '';
          return;
        }
      }

      files = Array.from(event.target.files);

      files.forEach(file => {
        const reader = new FileReader();

        reader.onload = ev => {
          const src = ev.target.result;
          attachList.insertAdjacentHTML('beforeend', `
    
            <li class="appointment__attach-item">
              <button class="appointment__attach-cancel base-button" type="button" data-name="${file.name}"></button>
              <img class="appointment__attach-img" src="${src}" alt="${file.name}">
            </li>
    
          `);
        }
        reader.readAsDataURL(file);
      })
    }

    function removeItem(event) {
      if (!event.target.dataset.name) {
        return;
      }
      let name = event.target.dataset.name;
      files = files.filter(file => file.name !== name);

      let block = attachList.querySelector(`[data-name="${name}"]`).closest('.appointment__attach-item');
      block.remove();
    }

    attachButton.addEventListener('click', () => {
      attachInput.click();
    })
    attachInput.addEventListener('change', addItem);
    attachList.addEventListener('click', removeItem);
  }
}

fileUpload();