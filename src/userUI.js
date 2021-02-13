import User from "./user";
import emitter from './EventEmitter';

class UserUI {
    constructor() {
        this.userContainer = document.getElementById('userContainer');
        this.userRepos = document.getElementById('userRepos');
        this.userFollowers = document.getElementById('userFollowers');

        this.render = this.render.bind(this);
        this.init = this.init.bind(this);
        this.createUserElement = this.createUserElement.bind(this);
        this.createReposElement = this.createReposElement.bind(this);
        this.createFollowersElement = this.createFollowersElement.bind(this);
    }

    render() {
        this.userContainer.innerHTML = this.createUserElement(User.user);
        this.userRepos.innerHTML = this.createReposElement(User.repos);
        this.userFollowers.innerHTML = this.createFollowersElement(User.followers);
    }

    init() {
        emitter.subscribe('foundedUser', this.render);
    }

    createUserElement(user) {
        if (user) {
            return `<div class="user">
                  <div>
                    <img src="${user.avatar_url}" alt="${user.name}">
                  </div>
                  <div>
                    <a href="${user.html_url}" target="_blank">
                        <h3>${user.login}</h3>
                    </a>
                    <p>${user.name ? user.name : ''}</p>
                  </div>
                </div>`;
        } else {
            return `<h3>User not found</h3>`
        }
    }

    createReposElement(repos) {
        if (repos.length === 0) {
            return '<h3>There is not repos</h3>'
        } else {
            let result = '<h2>Repos:</h2>' +
                '<ul>';

            for (let i = 0; i < Math.min(repos.length, 10); i++) {
                result += `<li>
                                <a href="${repos[i].html_url}" target="_blank">
                                    <h3>${repos[i].name}</h3> 
                                </a>
                           </li>`
            }
            result += '</li>';

            return result;
        }
    }

    createFollowersElement(followers) {
        if (followers.length === 0) {
            return '<h3>There is no followers</h3>'
        } else {
            let result = '<h2>Followers:</h2>' +
                '<ul>';

            for (let i = 0; i < Math.min(followers.length, 10); i++) {
                result += `<li>
                                <div>
                                    <img src="${followers[i].avatar_url}" alt="${followers[i].login}">
                                  </div>
                                  <div>
                                    <a href="${followers[i].html_url}" target="_blank">
                                        <h3>${followers[i].login}</h3>
                                    </a>
                                  </div>
                           </li>`
            }
            result += '</li>';

            return result;
        }
    }
}

export default new UserUI();