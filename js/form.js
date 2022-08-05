"use strict"

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form');
  form.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form); //валідація
    //Якщо ВАЛІДАЦІЯ пройдена - показати вікно очікування
    let formData = new FormData(form);
    //Запустити php файл
      if(error == 0) {
        form.classList.add('wait');
        let response = await fetch('sender.php',{
          method: 'POST',
          body: formData,
      });
      //після відправки обнулити форму
      if (response.ok) {
        let result = await response.json();
        alert(result.message);
        let a = [];
        a = document.querySelectorAll('input');
        for(i=0;i<a.length;i++) {
          a[i].value = '';
        }
        form.classList.remove('wait');
      } else {
      alert("Помилка відправки");
      form.classList.remove('wait');
    }
    } else {
      alert('Деякі поля не заповнені або заповнені невірно')
    }
  }

//ВАЛІДАЦІЯ
  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('.valid');//усі поля з валідацією
    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);
      if(input.classList.contains('email')) {
        if(!(input.value=='')) {
          if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value)) {// перевірка email
            console.log(`input.value= $(input.value)`);
            formAddError(input);
            error++;
          }
        }
        }else if(input.classList.contains('phone')) {
            if (!/^\+?\d{0,2}[-,\s,(]?\d{3}[-,\s,)]?[-,\s]?\d{3}[-,\s]?\d{2}[-,\s]?\d{2}$/.test(input.value)) {// перевірка телефону
              formAddError(input);
              error++;
            }
        }else if(input.classList.contains('name')) {
            if (!/^\D{2,32}$/.test(input.value)) {// перевірка імені
              formAddError(input);
              error++;
            }
        } else {
          if (input.value === '') {//перевірка полів на введені символи
            formAddError(input);
            error++;
          }
        }
      }
      return error;
    }
    //додавання класу неправильно заповненим або незаповненим полям
  function formAddError(input) {
    input.parentElement.classList.add('error');
    input.classList.add('error');
  }  //прибирання класу помилки з виправлених полів
  function formRemoveError(input) {
    input.parentElement.classList.remove('error');//додавання класу неправильно заповненим
    input.classList.remove('error');//або незаповненим полям
  }
});
