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
    }

    function getStyleWidth(element) {
        return +window.getComputedStyle(element).width.slice(0, -2);
    }
});