import searchUI from "./searchUI";
import userUI from "./userUI";

document.addEventListener('DOMContentLoaded', () => {
    searchUI.render();
    userUI.init();
});