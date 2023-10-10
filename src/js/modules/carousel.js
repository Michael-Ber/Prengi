function carousel({ trackWrapper, slideSelector, wrapperSelector, prevArrow, nextArrow }) {
    //Carousel

    window.addEventListener('resize', () => {
        callSlider();
    });

    function callSlider() {
        const track = document.querySelector(trackWrapper),
            slides = document.querySelectorAll(slideSelector),
            wrapper = document.querySelector(wrapperSelector),
            width = +window.getComputedStyle(wrapper).width.slice(0, -2),
            btnNext = document.querySelector(nextArrow),
            btnPrev = document.querySelector(prevArrow);

        track.style.width = 100 * slides.length + '%';
        slides.forEach(slide => {
            slide.style.width = `${width}px`;
        });
        let offset = 0;
        track.style.transform = `translateX(${offset}px)`;

        btnNext.addEventListener('click', () => moveNext(track));

        btnPrev.addEventListener('click', () => movePrev(track));

        function moveNext(element) {
            if (offset >= ((slides.length - 1) * width)) {
                offset = 0;
            } else {
                offset += width;
            }
            element.style.transform = `translateX(-${offset}px)`;
        }

        function movePrev(element) {
            if (offset <= 0) {
                offset = (slides.length - 1) * width;
            } else {
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
        carousel.addEventListener('touchstart', swipeStart, { passive: false });

        // document.addEventListener('mousemove', swipeAction);
        carousel.addEventListener('touchmove', swipeAction, { passive: false });

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

                if (diffDist < -threshold) {
                    moveNext(track);
                    moving = false;
                } else if (diffDist > threshold) {
                    movePrev(track);
                    moving = false;
                }
            }
        }

        function swipeEnd() {
            moving = false;
            track.style.transform = `translateX(${-offset}px)`;
        }
    }

    callSlider();
}

export default carousel;