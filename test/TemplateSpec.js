
describe('Lib Template - widget', () => {

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

    it('properties', () => {
        expect(tpl.container).not.toBeUndefined();
        expect(tpl.container).toBeNull();
        expect(tpl.filename).not.toBeUndefined();
        expect(tpl.filename).toBeNull();
        expect(tpl.method).not.toBeUndefined();
        expect(tpl.method).toEqual('GET');
        expect(tpl.params).not.toBeUndefined();
        expect(tpl.params).toBeNull();
        expect(tpl.targetId).not.toBeUndefined();
        expect(tpl.targetId).toBeNull();
        expect(tpl.response).not.toBeUndefined();
        expect(tpl.response).toBeNull();
        expect(tpl.templateExt).not.toBeUndefined();
        expect(tpl.templateExt).toEqual('.html');
        expect(tpl.templateUriPrefix).not.toBeUndefined();
        expect(tpl.templateUriPrefix).toEqual('/templates/');
        expect(tpl.renderer).not.toBeUndefined();
        expect(tpl.renderer instanceof HTMLDivElement).toBeTruthy();
    });

    it('setters', () => {
        tpl.setFilename(filename);
        expect(tpl.filename).toEqual(filename);
        tpl.setParams(params);
        expect(tpl.params).toEqual(params);
        tpl.setTargetId(targetId);
        expect(tpl.targetId).toEqual(targetId);
        tpl.setResponse('a response');
        expect(tpl.response).toEqual('a response');
    });

    it('getUrl', () => {
        tpl.setFilename(filename);
        expect(tpl.getUrl()).toEqual('/templates/widget.html');
    });

    it('load - response', (done) => {
        tpl.setFilename(filename);
        tpl.load().then(response => {
            expect(response).not.toBeNull();
            done();
        });
    });

    it('load - template element', (done) => {
        tpl.setFilename(filename);
        tpl.load().then(response => {
            const trimmedResponse = response.toString().trim();
            expect(trimmedResponse.substr(0, 1)).toEqual('<');
            expect(trimmedResponse.substr(1, 8)).toEqual('template');
            done();
        });
    });

    it('parse', (done) => {
        tpl.setFilename(filename);
        tpl.load().then(response => {
            tpl.setResponse(response);
            tpl.parse();
            expect(tpl.container instanceof HTMLElement).toBeTruthy();
            done();
        });
    });

    it('hydrate - without params', (done) => {
        tpl.setFilename(filename);
        tpl.load().then(response => {
            tpl.setResponse(response).parse().hydrate();
            expect(tpl.container instanceof HTMLElement).toBeTruthy();
            expect(tpl.renderer instanceof HTMLDivElement).toBeTruthy();
            expect(tpl.renderer.innerHTML).toEqual('');
            done();
        });
    });

    it('hydrate - with params', (done) => {
        tpl.setFilename(filename);
        tpl.load().then(response => {
            tpl.setParams(params)
                .setResponse(response)
                .parse()
                .hydrate();
            expect(tpl.renderer instanceof HTMLDivElement).toBeTruthy();
            const rendererContent = tpl.renderer.innerHTML;
            expect(rendererContent).not.toEqual('');
            expect(rendererContent.trim().substr(0, 8)).toEqual('<section');
            done();
        });
    });

    it('render - with params', (done) => {
        tpl.setFilename(filename)
            .setParams(params)
            .load()
            .then(response => {
                tpl.render(response);
                const rendererContent = tpl.renderer.innerHTML;
                expect(rendererContent).not.toEqual('');
                expect(rendererContent.trim().substr(0, 8)).toEqual('<section');
                done();
            });
    });

    it('mount', (done) => {
        tpl.setFilename(filename)
            .setParams(params)
            .setTargetId(targetId)
            .load()
            .then(response => {
                tpl.render(response);
                const rendererContent = tpl.renderer.innerHTML;
                expect(rendererContent.trim().substr(0, 8)).toEqual('<section');
                const documentTarget = document.querySelector(tpl.targetId);
                expect(documentTarget.innerHTML).toEqual('');
                tpl.mount();
                expect(rendererContent).toEqual(documentTarget.innerHTML);
                done();
            });
    });

})