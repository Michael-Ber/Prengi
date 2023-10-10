
import adaptation from './modules/adaptation';
import modal from "./modules/modal";
import form from "./modules/form";
import carousel from './modules/carousel';
import tabs from './modules/tabs';

window.addEventListener('DOMContentLoaded', () => {

    adaptation({
        barSelector: '.first__bar',
        parentSelector: '.first__content'
    });


    modal({
        modalSelector: '.modal',
        openBtn: '.sixth__btn',
        closeBtn: '.modal__close'
    });

    form({
        modalSelector: '.modal',
        formSelector: '.form'
    });

    carousel({
        trackWrapper: '.third__carousel-track',
        slideSelector: '.third__carousel-slide',
        wrapperSelector: '.third__carousel-wrapper',
        nextArrow: '.third__carousel-right',
        prevArrow: '.third__carousel-left'
    });

    tabs({
        tabHeader: '.third__tabs-header',
        tabHeaderItem: '.third__tabs-header-item',
        tabContentSelector: '.third__tabs-content'
    });

});