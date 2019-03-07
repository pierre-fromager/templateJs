
class widgetCommentsComponent {

    constructor(root) {
        this.root = (root) ? root : '';
        this.server = null;
        const shadow = document.createElement('shadow');
        const container = document.createElement('div');
        const pureRoot = this.root.replace('#', '');
        container.setAttribute('id', pureRoot);
        shadow.appendChild(container);
        this.container = shadow;
        return this;
    }

    setServer(server) {
        this.server = server;
        return this;
    }

    setMarkers(markers) {
        this.markers = markers;
        return this;
    }

    load() {
        return this.initDatas().then(instance => {
            return instance.initTemplates();
        });
    }

    initDatas() {
        return new Promise(function (resolve, reject) {
            this.widgetParams = {
                '[tid="myWidgetHeader"]': 'Widget title inline',
                '[tid="myWidgetAside"]': '',
                '[tid="myWidgetFooter"]': 'Widget footer inline'
            };
            this.tableParams = {
                '[tid="myTableCaption"]': 'Table caption inline'
            };
            this.commentItems = [
                { '.commentAuthor': 'Joe', '.commentBody': 'I love this product.' },
                { '.commentAuthor': 'Mary', '.commentBody': 'Great idea. I have got to get me one of these!' },
                { '.commentAuthor': 'Eric', '.commentBody': 'These things are fantastic. I bought three.' }
            ];
            resolve(this);
        }.bind(this)).catch(() => {
            reject({ status: 'error', msg: 'initDatas failed' });
        });
    }

    initTemplates() {
        this.widget = new Template('widget')
            .setTargetId(this.root)
            .setParams(this.widgetParams);
        this.table = new Template('table')
            .setTargetId(this.root + ' ' + '[tid="myWidgetAside"]')
            .setParams(this.tableParams);
        this.tableItems = new Template('tableItem')
            .setTargetId(this.root + ' ' + '[tid="myTableBodyId"]')
            .setParams(this.commentItems);
        return this;
    }

    render() {
        return new Promise(function (resolve, reject) {
            this.widget.load().then(function (response) {
                this.markers.add('widgetLoaded');
                this.widget.render(response);
                this.widget.mount(this.container);
                this.markers.add('widgetRendered');
                this.table.load().then(function (response) {
                    this.markers.add('tableLoaded');
                    this.table.render(response);
                    this.table.mount(this.container);
                    this.markers.add('tableRendered');
                    this.tableItems.load().then(function (response) {
                        this.markers.add('tableItemsLoaded');
                        this.tableItems.render(response);
                        this.tableItems.mount(this.container);
                        this.markers.add('tableItemsRendered');
                        this.widget.clean();
                        this.markers.add('widgetClean');
                        resolve(this);
                    }.bind(this)).catch(err => reject(err));
                }.bind(this)).catch(err => reject(err));
            }.bind(this)).catch(err => reject(err));
        }.bind(this));
    }

    mount() {
        const target = document.querySelector(this.root);
        const children = this.container.querySelector(this.root).childNodes;
        for (var i = 0; i < children.length; i++) {
            target.appendChild(children[i].cloneNode(true));
        }
    }

}