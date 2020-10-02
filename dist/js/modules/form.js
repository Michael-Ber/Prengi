import {hideModal, showModal} from './modal';
import postData from '../services/postData';

function form({modalSelector, formSelector}) {
      // Работа с формой

      const form = document.querySelector(formSelector);
      const message = {
          "success": "Спасибо, скоро мы с вами свяжемся",
          "loading": 'icons/form/spinner1.gif',
          "failure": "Что-то пошло не так"
      };
  
  
      
  
      function showThanksModal (message) {
          const prevWindow = document.querySelector('.modal__wrapper');
          hideModal(prevWindow);
          let newWindow = document.createElement('div');
          newWindow.classList.add('modal__wrapper');
          newWindow.innerHTML = `
              <div data-close class="modal__close">&times;</div>
              <div class="modal__title">${message}</div>
          `;
          document.querySelector(modalSelector).append(newWindow);
  
          setTimeout(() => {
              newWindow.remove();
              hideModal(document.querySelector(modalSelector));
              showModal(prevWindow);
          },5000);
      }
  
      function bindPostData(formName, message) {
          formName.addEventListener('submit', (e) => {
              e.preventDefault();
              const spinner = document.createElement('img');
              spinner.src = message.loading;
              spinner.style.cssText = `
                      display: block;
                      margin: 10px auto 0 auto;	
                      max-width: 20px;
              `;
              form.insertAdjacentElement("afterend", spinner);
              const formData = new FormData(formName);
              
              let json = JSON.stringify(Object.fromEntries(formData.entries()));
              
              postData('http://localhost:3000/requests', json)
              .then(data => {
                  showThanksModal(message.success);
              })
              .finally(() => {
                  form.reset();
              })
              .catch(() => {
                  showThanksModal(message.failure);
              });
      
          });
      }
  
      bindPostData(form, message);
}

export default form;