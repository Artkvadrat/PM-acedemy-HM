export default class User {
    static user = {};

    static get user() {
        return this.user;
    }

    static set user(value) {
        console.log(value)
        this.user = value;
    }
}