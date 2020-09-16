window.addEventListener('DOMContentLoaded', () => {

    //Адаптация first__bar 
    const bar = document.querySelector('.first__bar'),
          parentBar = document.querySelector('.first__content'),
          barRightValue = +window.getComputedStyle(bar).width.slice(0, -2),
          mobileWidth = 320;

    bar.style.right = `${barRightValue + (getStyleWidth(parentBar) - mobileWidth)/2}px`; 
    if(window.matchMedia('(max-width: 576px)').matches) {
         
        window.addEventListener('resize', () => {
            const parentWidth = getStyleWidth(parentBar);
            bar.style.right = `${(barRightValue + (parentWidth - mobileWidth)/2)}px`;
        });
    }else if(window.matchMedia('(max-width: 768px)').matches) {
        bar.style.right = `200px`;
    }else if(window.matchMedia('(max-width: 992px)').matches) {
        bar.style.right = `156px`;
    }else if(window.matchMedia('(max-width: 1200px)').matches) {
        bar.style.right = `50px`;
        console.log('here');
    }else {
        bar.style.right = 0;
    }

    function getStyleWidth(element) {
        return +window.getComputedStyle(element).width.slice(0, -2);
    }

    //Создаем карточки на второй странице

    //Carousel

    const track = document.querySelector('.third__carousel-track'),
          slides = document.querySelectorAll('.third__carousel-slide'),
          width = window.getComputedStyle(slides[0]).width;
    
   console.log(width);
});