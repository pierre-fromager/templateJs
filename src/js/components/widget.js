
class widgetCommentsComponent {

    constructor(root) {
        this.root = root;
        return this;
    }

    setMarkers(markers){
        this.markers = markers;
        return this;
    }

    loadDatas() {
        return this.initDatas().then(instance => {
            return instance.initTemplates();
        });
    }

    initDatas() {
        return new Promise(function (resolve) {
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
        }.bind(this));
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
                this.markers.add('widgetRendered');
                this.table.load().then(function (response) {
                    this.markers.add('tableLoaded');
                    this.table.render(response);
                    this.markers.add('tableRendered');
                    this.tableItems.load().then(function (response) {
                        this.markers.add('tableItemsLoaded');
                        this.tableItems.render(response);
                        this.markers.add('tableItemsRendered');
                        this.widget.clean();
                        this.markers.add('widgetClean');
                        resolve(this);
                    }.bind(this)).catch(err => reject(err));
                }.bind(this)).catch(err => reject(err))
            }.bind(this)).catch(err => reject(err));
        }.bind(this));
    }

}