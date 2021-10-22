'use strict';

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    //loop: true,
    navigation: {
        nextEl: '.portfolio__arrow__right',
        prevEl: '.portfolio__arrow__left',
        disabledClass: 'portfolio__arrow__disable'
    },
    breakpoints: {
        480: {
            grid: {
                fill: 'row',
                rows: 2,
            }
        },
        768: {
            slidesPerView: 2,
            grid: {
                fill: 'row',
                rows: 2,
            },            
        }
    }
});

$('.header__contacts-burger').click(() => {
    $('.header__contacts').slideToggle();
});
$('.present__order-btn').click(() => {
    $('.page__overlay__modal').fadeIn(400).css('display','flex');
});
$('.modal__close').click(() => {
    $('.page__overlay__modal').fadeOut(400);
});