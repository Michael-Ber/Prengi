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

    window.addEventListener('resize', () => {
        const track = document.querySelector('.third__carousel-track'),
          slides = document.querySelectorAll('.third__carousel-slide'),
          wrapper = document.querySelector('.third__carousel-wrapper'),
          width = +window.getComputedStyle(wrapper).width.slice(0,-2),
          btnNext = document.querySelector('.third__carousel-right'),
          btnPrev = document.querySelector('.third__carousel-left');
    
        track.style.width = `${width * slides.length}px`;

        let offset = 0;
        track.style.transform = `translateX(${offset}px)`;

        btnNext.addEventListener('click', moveNext.bind(this, track));

        btnPrev.addEventListener('click', movePrev.bind(this, track));

        function moveNext(element) {
            if(offset >= ((slides.length-1) * width)) {
                offset = 0;
            }else {
                offset += width;
            }
            element.style.transform = `translateX(-${offset}px)`;
        }

        function movePrev(element) {
            if(offset <= 0) {
                offset = (slides.length-1) * width;
            }else {
                offset -= width;
            }
            element.style.transform = `translateX(-${offset}px)`;
        }

        //Взаимодействие со слайдером при помощи мыши или касания пальцем
        let moving = false,
            initX,
            currentX,
            diffDist,
            threshold = 100;
        const carousel = document.querySelector('.third__carousel');
        
    
        // document.addEventListener('mousedown', swipeStart);
        carousel.addEventListener('touchstart', swipeStart, {passive: false});

        // document.addEventListener('mousemove', swipeAction);
        carousel.addEventListener('touchmove', swipeAction, {passive: false});

        // document.addEventListener('mouseup', swipeEnd);
        carousel.addEventListener('touchend', swipeEnd);
        
        

        function swipeStart(e) {
            e.preventDefault();
            initX = e.touches[0].clientX;
            moving = true;
            
        }

        function swipeAction(e) {
            e.preventDefault();
            if (moving) {
                currentX = e.touches[0].clientX;
                diffDist = currentX - initX;
                track.style.transform = `translateX(${diffDist - offset}px)`;

                if(diffDist < -threshold) {
                    moveNext(track);
                    moving = false;
                }else if(diffDist > threshold) {
                    movePrev(track);
                    moving = false;
                }
            }
        }

        function swipeEnd() {
            moving = false;
            track.style.transform = `translateX(${-offset}px)`;
        }
        });

    //Tabs

    const tabsParent = document.querySelector('.third__tabs-header'),
          tabItem = document.querySelectorAll('.third__tabs-header-item'),
          tabContent = document.querySelectorAll('.third__tabs-content');

    removeActive(tabItem);
    removeActive(tabContent);

    addActive(tabItem[1]);
    addActive(tabContent[1]);

  
    tabsParent.addEventListener('click', chooseTab);

    function chooseTab(e) {
        tabItem.forEach((item, index) => {
            if (e.target && e.target == item) {
                removeActive(tabItem);
                removeActive(tabContent);
                addActive(item);
                addActive(tabContent[index]);
            }
        }); 
    } 

    function removeActive(item) {
        item.forEach(element => {
            element.classList.remove('active');
        })
    }

    function addActive(item) {
        item.classList.add('active');
    }


});