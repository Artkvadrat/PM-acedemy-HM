export default class User {
    static user = {};
    static followers = {};
    static repos = {};

    static get user() {
        return this.user;
    }

    static set user(value) {
        this.user = value;
    }

    static get followers() {
        return this.followers;
    }

    static set followers(value) {
        this.followers = value;
    }

    static get repos() {
        return this.repos;
    }

    static set repos(value) {
        this.repos = value;
    }
}