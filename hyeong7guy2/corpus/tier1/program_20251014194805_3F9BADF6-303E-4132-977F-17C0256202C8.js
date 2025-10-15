function f0() {
    return f0;
}
const v1 = class extends f0 {
    constructor() {
        super();
        const v4 = String.prototype;
        const v5 = v4.localeCompare;
        v5.apply(v5, [v4,v4]);
    }
}
new v1();
