

//jasmine.

describe('Testing the component, this is the widget', () => {

    let markers;

    beforeEach(function () {
        //jasmine.random = false;

        
        markers = new Markers();
        console.log(jasmine);
    });

    it('test0 - template', () => {
        expect(markers).not.toBeUndefined();
        expect(markers.start).toBeGreaterThan(0);
        expect(markers.marks).toBeDefined();
        expect(markers.marks).toEqual([]);
    })

    it('test1 - markers', () => {
        expect(markers).not.toBeUndefined();
        expect(markers.start).toBeGreaterThan(0);
        expect(markers.marks).toBeDefined();
        expect(markers.marks).toEqual([]);
    })

    it('test2 - component', () => {

        const widget = new widgetCommentsComponent('#widgetCmp');
        /*
            .setMarkers(markers).load().then(widget => {
                widget.render().then(widget => {
                    markers.add('widgetCommentsComponent rendered');
                    //widget.mount();
                    expect(widget).not.toBeUndefined();
          
                }).catch(err => console.error(err))
            }).catch(err => console.error(err));*/
        expect(widget).not.toBeUndefined();
        expect(widget.root).not.toBeUndefined();
        expect(widget.root).toEqual('#widgetCmp');
        expect(widget.markers).toBeUndefined();
        widget.setMarkers(markers);
        expect(widget.markers).not.toBeUndefined();
/*
        spyOn(widget, 'load').and.returnValue(Promise.resolve(widget));
        
        widget.load().then( widget => {
            expect(widget.load).toBe.in
        });*/
    })
})
