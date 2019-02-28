
class Api {

    constructor(endpoint) {
        this.path = '/json/';
        this.ext = '.json';
        this.endpoint = endpoint;
        this.method = 'GET';
    }

    load() {
        const url = this.getUrl();
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.responseType = 'json';
            xhr.open('GET', url);
            xhr.onload = function () {
                if (this.status >= 200 && this.status < 300) {
                    resolve(xhr.response.datas);
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

    getUrl(){
        return this.path + this.endpoint + this.ext;
    }
}