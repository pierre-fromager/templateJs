
describe('Lib Api', () => {

    beforeEach(() => {
        endpoint = 'widget';
        badEp = 'bananas';
    });

    it('properties', () => {
        const apiWithoutEp = new Api();
        expect(apiWithoutEp.path).toEqual('/json/');
        expect(apiWithoutEp.ext).toEqual('.json');
        expect(apiWithoutEp.method).toEqual('GET');
        expect(apiWithoutEp.endpoint).toBeUndefined();
        const apiWithEp = new Api(endpoint);
        expect(apiWithEp.endpoint).toEqual(endpoint);
    });

    it('getUrl', () => {
        const api = new Api(endpoint);
        expect(api.getUrl()).not.toEqual('');
        expect(api.getUrl()).toEqual(api.path + endpoint + api.ext);
    });

    it('load - good response', (done) => {
        const api = new Api(endpoint);
        api.load().then(response => {
            expect(response).not.toBeNull();
            expect(response.datas).toBeUndefined();
            done();
        });
    });

    it('load - bad response', (done) => {
        const api = new Api(badEp);
        api.load().then().catch(err => {
            expect(err.status).not.toBeUndefined();
            expect(err.status).toEqual(404);
            done();
        });
    });

});
