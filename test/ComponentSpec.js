
describe('widgetCommentsComponent', () => {

    beforeEach(() => {
        markers = new Markers();
        root = '#elementId';
        widgetParams = {
            '[tid="myWidgetHeader"]': 'Widget title inline',
            '[tid="myWidgetAside"]': '',
            '[tid="myWidgetFooter"]': 'Widget footer inline'
        };
        tableParams = {
            '[tid="myTableCaption"]': 'Table caption inline'
        };
        commentItems = [
            { '.commentAuthor': 'Joe', '.commentBody': 'I love this product.' },
            { '.commentAuthor': 'Mary', '.commentBody': 'Great idea. I have got to get me one of these!' },
            { '.commentAuthor': 'Eric', '.commentBody': 'These things are fantastic. I bought three.' }
        ];

    });

    it('properties', () => {
        widget = new widgetCommentsComponent();
        expect(widget.root).toEqual('');
        expect(widget.container instanceof HTMLElement).toBeTruthy();
    });

    it('setMarkers', () => {
        widget = new widgetCommentsComponent();
        widget.setMarkers(markers);
        expect(widget.markers).not.toBeUndefined();
        expect(widget.markers.start).toBeGreaterThan(0);
        expect(widget.markers.marks).toBeDefined();
        expect(widget.markers.marks).toEqual([]);
    });

    it('initDatas', done => {
        widget = new widgetCommentsComponent();
        widget.initDatas().then(w => {
            expect(w instanceof widgetCommentsComponent).toBeTruthy();
            expect(w.widgetParams).toEqual(widgetParams);
            expect(w.tableParams).toEqual(tableParams);
            expect(w.commentItems).toEqual(commentItems);
            done();
        });
    });

    it('load', done => {
        widget = new widgetCommentsComponent();
        widget.load().then(w => {
            expect(w instanceof widgetCommentsComponent).toBeTruthy();
            expect(w.widgetParams).toEqual(widgetParams);
            expect(w.tableParams).toEqual(tableParams);
            expect(w.commentItems).toEqual(commentItems);
            expect(w.widget instanceof Template).toBeTruthy();
            expect(w.table instanceof Template).toBeTruthy();
            expect(w.tableItems instanceof Template).toBeTruthy();
            done();
        }).catch(err => {
            expect(err)
        });
    });

    it('render - no root bad selector', done => {
        widget = new widgetCommentsComponent().setMarkers(markers);
        widget.load().then(wl => {
            expect(wl instanceof widgetCommentsComponent).toBeTruthy();
            wl.render().then().catch(err => {
                expect(err instanceof DOMException).toBeTruthy();
                done();
            });
        }).catch(err => console.error(err));
    });

    it('render - root fine', done => {
        widget = new widgetCommentsComponent(root).setMarkers(markers);
        widget.load().then(wl => {
            expect(wl instanceof widgetCommentsComponent).toBeTruthy();
            expect(wl.container.innerHTML).toEqual('<div id="elementId"></div>');
            wl.render().then(w => {
                expect(w instanceof widgetCommentsComponent).toBeTruthy();
                expect(w.widgetParams).toEqual(widgetParams);
                expect(w.tableParams).toEqual(tableParams);
                expect(w.commentItems).toEqual(commentItems);
                expect(w.widget instanceof Template).toBeTruthy();
                expect(w.table instanceof Template).toBeTruthy();
                expect(w.tableItems instanceof Template).toBeTruthy();
                done();
            }).catch(err => console.error(err));
        }).catch(err => console.error(err));
    });

    it('mount', done => {
        widget = new widgetCommentsComponent(root).setMarkers(markers);
        widget.load().then(wl => {
            wl.render().then(w => {
                const target = document.querySelector(root);
                expect(target.innerHTML).toEqual('');
                w.mount();
                expect(target.innerHTML).not.toEqual('');
                done();
            }).catch(err => console.error(err));
        }).catch(err => console.error(err));
    });

});
