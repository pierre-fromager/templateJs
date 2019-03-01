
function Template(filename) {
    this.filename = (filename) ? filename : null;
    this.params = {};
    this.targetId = null;
    this.response = null;
    this.container = null;
    this.templateUriPrefix = '/templates/';
    this.templateExt = '.html';
    this.method = 'GET';
    this.renderer = document.createElement('div');
}

Template.prototype.setTargetId = function (targetId) {
    this.targetId = targetId;
    return this;
}

Template.prototype.setFilename = function (filename) {
    this.filename = filename;
    return this;
}

Template.prototype.setParams = function (params) {
    this.params = params;
    return this;
}

Template.prototype.setResponse = function (response) {
    this.response = response;
    return this;
}

Template.prototype.parse = function () {
    this.container = new DOMParser()
        .parseFromString(this.response, 'text/html')
        .querySelector('template');
    return this;
}

Template.prototype.render = function (response) {
    this.setResponse(response);
    this.parse();
    this.hydrate();
    return this;
}

Template.prototype.hydrate = function () {
    if (this.params === undefined) {
        return this;
    }
    if (!Array.isArray(this.params)) {
        this.params = [this.params];
    }
    for (var i = 0; i < this.params.length; i++) {
        const tpl = this.container.content.cloneNode(true);
        const itemParams = this.params[i];
        for (var selector in itemParams) {
            const paramValue = itemParams[selector];
            tpl.querySelector(selector).innerText = paramValue;
        }
        this.renderer.appendChild(tpl);
    }
    return this;
}

Template.prototype.mount = function (targetContainer) {
    if (targetContainer === undefined) {
        targetContainer = document;
    }
    const to = targetContainer.querySelector(this.targetId);
    this.appendChildren(this.renderer, to);
}

Template.prototype.appendChildren = function (from, to) {
    for (var i = 0; i < from.childNodes.length; i++) {
        to.appendChild(from.childNodes[i].cloneNode(true));
    }
}

Template.prototype.getUrl = function () {
    return this.templateUriPrefix + this.filename + this.templateExt;
}

Template.prototype.load = function () {
    const url = this.getUrl();
    const method = this.method;
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
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

Template.prototype.clean = function () {
    let nodes = this.renderer.querySelectorAll(":empty");
    nodes.forEach(node => {
        if (!node.childNodes.length) {
            let parent = node.parentNode;
            node.parentNode.removeChild(node);
            if (!parent.children.length) {
                parent.parentNode.removeChild(parent)
            }
        }
    });
}