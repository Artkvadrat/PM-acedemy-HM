import HttpService from "./HttpService";
import User from "./user";
import emitter from './EventEmitter';
import { debounce } from "./debounce";

class SearchUI {
    constructor() {
        this.searchForm = document.getElementById('searchForm');
        this.searchInput = document.getElementById('searchInput');
        this.searchFormButton = document.getElementById('searchFormButton');

        this.render = this.render.bind(this);
        this.init = this.init.bind(this);
        this.searchFormSubmit = this.searchFormSubmit.bind(this);

        this.render = debounce(this.render, 500);
    }

    render(e) {
        this.searchFormButton.disabled = this.searchInput.value === '';
        this.searchFormSubmit(e);
    }

    async searchFormSubmit(e) {
        e.preventDefault();
        let result = await HttpService.request(`users/${this.searchInput.value}`);
        if (result.message === 'Not Found') {
            User.user = '';
            User.repos = '';
            User.followers = '';
            emitter.emit('foundedUser');
        } else {
            User.user = result;
            User.repos = await HttpService.request(`users/${this.searchInput.value}/repos`);
            User.followers = await HttpService.request(`users/${this.searchInput.value}/followers`);
            emitter.emit('foundedUser');
        }
    }

    init() {
        this.searchForm.addEventListener('submit', this.searchFormSubmit);
        this.searchInput.addEventListener('input', this.render);
    }
}

export default new SearchUI();