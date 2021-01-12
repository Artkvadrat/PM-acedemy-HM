'use strict'

let files = ['main.jpg', 'header.html'];

/*
 * showing all files from array and adding event listener on every item
 */
const updateContent = () => {
    let main = document.getElementById('main');
    let content = '';


    files.map((item) => {
        content += `<p>${item}</p>`;
    })
    main.innerHTML = content;

    let allParagraphTags = document.getElementsByTagName('p');

    for (let i = 0; i < allParagraphTags.length; i++) {
        allParagraphTags[i].addEventListener('contextmenu', customRightClickOnItem);
    }
}

document.onload = updateContent();


/*
 * add custom context menu for adding new items
 * and disabling default context menu
 */
document.addEventListener('contextmenu', customRightClickOnDocument);
/*
 * custom context menu on right click on element
 */
const itemContextMenu = document.getElementById('itemContextMenu');
/*
 * custom context menu on right click on document
 */
const addItemContextMenu = document.getElementById('addItemContextMenu');
/*
 *hiding context menu on click
 */
document.addEventListener('click', () => {
    hideContextMenu(itemContextMenu);
    hideContextMenu(addItemContextMenu);
})
/*
 * this variable is used for knowing on which element working user
 */
let activeFile = '';

const hideContextMenu = (target) => {
    target.style.display = 'none';
    activeFile = '';
}

const showContextMenu = (target, e) => {
    target.style.display = 'block';
    target.style.left = e.pageX - 18 + "px";
    target.style.top = e.pageY + 20 + "px";
    activeFile = e.target.innerText;
}
/*
 * Showing or hiding context menu on items
 */
function customRightClickOnItem (event) {
    event.preventDefault();
    if (itemContextMenu.style.display === 'block') {
        hideContextMenu(itemContextMenu);
    } else {
        showContextMenu(itemContextMenu, event);
    }
}
/*
 * Function for rename file and updating array
 */
function renameItem () {
    let currentIndex = files.findIndex(item => item === activeFile);
    let newValue = prompt('Enter new file name please', files[currentIndex]);

    if (newValue === '') {
        alert('You have entered wrong filename');
    } else if (!newValue) {
        alert('Renaming canceled')
    } else {
        files[currentIndex] = newValue;
        updateContent();
    }
}
/*
 * Function for deleting item from array
 */
function deleteItem () {
    let currentIndex = files.findIndex(item => item === activeFile);
    let confirmDeleting = confirm(`Are you sure you want to delete ${files[currentIndex]} file?`);

    if (confirmDeleting) {
        files.splice(currentIndex, 1);
        updateContent();
    } else {
        alert('File not deleted');
    }
}

/*
 * Event handler on free space in document
 */
function customRightClickOnDocument (event) {
    event.preventDefault();
    if (itemContextMenu.style.display === 'block') {
        hideContextMenu(addItemContextMenu);
    } else {
        showContextMenu(addItemContextMenu, event);
    }
    return false;
}

function addItem () {
    let newValue = prompt('Enter new file please');
    console.log(newValue)
    if (newValue === '') {
        alert('You have entered wrong filename');
    } else if (!newValue) {
        alert('Adding canceled');
    } else {
        files.push(newValue);
        updateContent();
    }
}
