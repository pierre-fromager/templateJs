
describe('Testing Lib Markers', () => {

    let markers;

    beforeEach(() => {
        markers = new Markers();
    });

    it('properties', () => {
        expect(markers.start).not.toBeUndefined();
        expect(markers.marks).not.toBeUndefined();
        expect(markers.marks).toEqual([]);
    });

    it('now', () => {
        const now = new Date().getTime();
        const markerId = 'amarker';
        markers.add(markerId);
        const firstMarker = markers.marks[0];
        expect(firstMarker.ts).toBeGreaterThanOrEqual(now);
    });

    it('add', () => {
        const now = new Date().getTime();
        const markerId = 'amarker';
        markers.add(markerId);
        const firstMarker = markers.marks[0];
        expect(firstMarker.ts).not.toBeUndefined();
        expect(firstMarker.ts).toBeGreaterThanOrEqual(now);
    });

    it('elapse', () => {
        const markerId = 'amarker';
        markers.add(markerId);
        const firstMarker = markers.marks[0];
        expect(markers.elapse).not.toBeUndefined();
        expect(markers.elapse).toBeGreaterThanOrEqual(0);
    });
})
