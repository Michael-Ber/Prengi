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
          width = +window.getComputedStyle(slides[0]).width.slice(0,-2),
          btnNext = document.querySelector('.third__carousel-right'),
          btnPrev = document.querySelector('.third__carousel-left');
    
    track.style.width = `${width * slides.length}px`;

    let offset = 0;

    btnNext.addEventListener('click', () => {
        console.log('next');
        if(offset >= ((slides.length-1) * width)) {
            offset = 0;
        }else {
            offset += width;
        }
        console.log(offset);
        track.style.transform = `translateX(-${offset}px)`;
    });

    btnPrev.addEventListener('click', () => {
        if(offset <= 0) {
            offset = (slides.length-1) * width;
        }else {
            offset -= width;
        }
        console.log(offset);
        track.style.transform = `translateX(-${offset}px)`;
    });
});