'use strict';

document.addEventListener('DOMContentLoaded', function(){

    const nav = document.querySelector('.navbar')
    const allNavItems = document.querySelectorAll(`.nav-link`)
    let navList = document.querySelector(`.collapse`)

    function addShadow() {
        if (window.scrollY >= 300) {
            nav.classList.add('shadow-bg')
        }
        else {
            nav.classList.remove('shadow-bg')
        }
    }

    allNavItems.forEach(item => item.addEventListener(`click`, () => navList.classList.remove(`show`)))


    show.addEventListener(`click`, removeNavi)
    window.addEventListener('scroll', addShadow)
})

