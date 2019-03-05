
describe('Testing lib Template', () => {

    beforeEach(() => {
        filename = 'widget';
        tpl = new Template();
        targetId = '#elementId';
        params = {
            '[tid="myWidgetHeader"]': 'Widget title inline',
            '[tid="myWidgetAside"]': '',
            '[tid="myWidgetFooter"]': 'Widget footer inline'
        };
    });

    it('instance - properties', () => {
        expect(tpl.container).not.toBeUndefined();
        expect(tpl.container).toBeNull();
        expect(tpl.filename).not.toBeUndefined();
        expect(tpl.filename).toBeNull();
        expect(tpl.method).not.toBeUndefined();
        expect(tpl.method).toEqual('GET');
        expect(tpl.params).not.toBeUndefined();
        expect(tpl.params).toEqual({});
        expect(tpl.targetId).not.toBeUndefined();
        expect(tpl.targetId).toBeNull();
        expect(tpl.response).not.toBeUndefined();
        expect(tpl.response).toBeNull();
        expect(tpl.templateExt).not.toBeUndefined();
        expect(tpl.templateExt).toEqual('.html');
        expect(tpl.templateUriPrefix).not.toBeUndefined();
        expect(tpl.templateUriPrefix).toEqual('/templates/');
    });

    it('instance - setters', () => {
        tpl.setFilename(filename);
        expect(tpl.filename).toEqual(filename);
        tpl.setParams(params);
        expect(tpl.params).toEqual(params);
        tpl.setTargetId(targetId);
        expect(tpl.targetId).toEqual(targetId);
        tpl.setResponse('a response');
        expect(tpl.response).toEqual('a response');
    });

    it('instance - getUrl', () => {
        tpl.setFilename(filename);
        expect(tpl.getUrl()).toEqual('/templates/widget.html');
    });

    it('instance - load + response', (done) => {
        tpl.setFilename(filename);
        tpl.load().then(response => {
            expect(response).not.toBeNull();
            const trimmedResponse = response.toString().trim();
            expect(trimmedResponse.substr(0, 1)).toEqual('<');
            expect(trimmedResponse.substr(1, 8)).toEqual('template');
            done();
        });
    });

    it('instance - parse', (done) => {
        tpl.setFilename(filename);
        tpl.load().then(response => {
            tpl.setResponse(response);
            tpl.parse();
            expect(tpl.container instanceof HTMLElement).toBeTruthy();
            done();
        });
    });


})
