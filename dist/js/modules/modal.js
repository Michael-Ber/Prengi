function showModal(selector) {
    selector.classList.add('show');
    selector.classList.remove('hide');
}

function hideModal (selector) {
    selector.classList.remove('show');
    selector.classList.add('hide');
}

function modal({modalSelector, openBtn, closeBtn}) {
    //Работа с модальным окном

    const modal = document.querySelector(modalSelector),
          callBtn = document.querySelector(openBtn),
          close = document.querySelector(closeBtn);

    callBtn.addEventListener('click', showModal.bind(this, modal));
    close.addEventListener('click', hideModal.bind(this, modal));

    

    window.addEventListener('click', (e) => {
        if (e.target.getAttribute('data-close') == '') {
            hideModal(modal);
        }
    });
}

export default modal;
export {hideModal, showModal};