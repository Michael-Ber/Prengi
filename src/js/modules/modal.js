function showModal(e, selector) {
    e.preventDefault();
    selector.classList.add('show');
    selector.classList.remove('hide');
}

function hideModal(selector) {
    selector.classList.remove('show');
    selector.classList.add('hide');
}

function modal({ modalSelector, openBtn, closeBtn }) {
    //Работа с модальным окном

    const modal = document.querySelector(modalSelector),
        callBtn = document.querySelector(openBtn),
        close = document.querySelector(closeBtn);

    callBtn.addEventListener('click', (e) => showModal(e, modal));
    close.addEventListener('click', () => hideModal(modal));



    window.addEventListener('click', (e) => {
        if (e.target.getAttribute('data-close') == '') {
            hideModal(modal);
        }
    });
}

export default modal;
export { hideModal, showModal };