class Markers {

    constructor() {
        this.init();
    }

    init() {
        this.tStart = this.now;
        this.markers = [];
    }

    add(id) {
        this.markers.push({ id, ts: this.now });
    }

    show() {
        this.markers.forEach(mark => console.info(mark.id, '@' + (mark.ts - tStart) + 'ms'));
    }

    get now() {
        return new Date().getTime();
    }

}