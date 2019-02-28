class Markers {

    constructor() {
        this.init();
    }

    init() {
        this.start = this.now;
        this.marks = [];
    }

    add(id) {
        this.marks.push({ id, ts: this.now });
    }

    show() {
        this.marks.forEach(mark => console.info(
            mark.id,
            '@' + (mark.ts - this.start) + 'ms')
        );
    }

    get elapse() {
        const last = this.marks.length - 1;
        return (this.marks[last].ts - this.start);
    }

    get now() {
        return new Date().getTime();
    }

}