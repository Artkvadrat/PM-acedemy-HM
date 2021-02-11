const END_POINT = 'https://api.github.com/';

export default class HttpService {
    static async request(path) {
        const url = `${END_POINT}${path}`;
        return fetch(url)
            .then((res) => {
                return res.json();
            })
            .catch(console.log);
    }
}