
class widgetCommentsExtComponent extends widgetCommentsComponent {

    constructor(root) {
        super(root);
        return this;
    }

    initDatas() {
        return Promise.all(this.fetchApisDatas());
    }

    load() {
        return this.initDatas().then(function (params) {
            [this.widgetParams, this.tableParams, this.commentItems] = params;
            return this.initTemplates();
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