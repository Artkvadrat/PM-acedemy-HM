'use strict'

let pages = document.querySelectorAll('div');
let pagesArray = Array.from(pages);
let highlightMenuItem = (idOfElement) => {
    pagesArray.map( (item, id) => {
        if (id === idOfElement) {
            pagesArray[id].style.display = 'block'
        } else {
            pagesArray[id].style.display = 'none'
        }
    })
}

let returnToDefault = (idOfElement) => {
    pagesArray.map( (item, id) => {
        if (id === idOfElement) {
            pagesArray[id].style.display = 'none'
        }

    })
    pagesArray[0].style.display = 'block'
}
