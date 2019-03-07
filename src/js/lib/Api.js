
class Api {

    constructor(endpoint) {
        this.server = 'http://0.0.0.0:3333';
        this.path = '/json/';
        this.ext = '.json';
        this.endpoint = endpoint;
        this.method = 'GET';
    }

    setServer(server) {
        this.server = server;
        return this;
    }

    load() {
        const url = this.getUrl();
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.responseType = 'text';
            xhr.open('GET', url);
            xhr.onload = function () {
                if (this.status >= 200 && this.status < 300) {
                    const payload = JSON.parse(this.responseText);
                    resolve(payload.datas);
                } else {
                    reject({ status: this.status, statusText: xhr.statusText });
                }
            };
            xhr.onerror = function () {
                reject({ status: this.status, statusText: xhr.statusText });
            };
            xhr.send();
        });
    }

    getUrl() {
        return this.server + this.path + this.endpoint + this.ext;
    }
}

if (typeof window === 'undefined') {
    module.exports = Api;
}