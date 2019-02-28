
class widgetCommentsExtComponent extends widgetCommentsComponent {

    constructor(root) {
        super(root);
        return this;
    }

    initDatas() {
        return Promise.all(this.fetchApisDatas());
    }

    loadDatas() {
        return this.initDatas().then(function (params) {
            this.widgetParams = params[0];
            this.tableParams = params[1];
            this.commentItems = params[2];
            return this.initTemplates();;
        }.bind(this)).catch(err => console.error(err));
    }

    fetchApisDatas() {
        return [
            new Api('widget').load(),
            new Api('table').load(),
            new Api('comments').load(),
        ];
    }

}