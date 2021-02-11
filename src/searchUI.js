import HttpService from "./HttpService";
import User from "./user";
import emitter from './EventEmitter';

class SearchUI {
    constructor() {
        this.searchForm = document.getElementById('searchForm');
        this.searchInput = document.getElementById('searchInput');
        this.searchFormButton = document.getElementById('searchFormButton');

        this.render = this.render.bind(this);
        this.init = this.init.bind(this);
        this.searchFormSubmit = this.searchFormSubmit.bind(this);

        this.init();
    }

    render() {
        this.searchFormButton.disabled = this.searchInput.value === '';
    }

    async searchFormSubmit(e) {
        e.preventDefault();
        let result = await HttpService.request(`users/${this.searchInput.value}`);
        if (result.message === 'Not Found') {
            console.log('No result');
        } else {
            User.user = result;
            emitter.emit('foundedUser');
        }
    }

    init() {
        this.searchForm.addEventListener('submit', this.searchFormSubmit);
        this.searchInput.addEventListener('input', this.render);
    }
}

export default new SearchUI();