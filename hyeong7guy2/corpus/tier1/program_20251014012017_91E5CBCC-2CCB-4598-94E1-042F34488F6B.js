function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = new Date();
class C4 extends F0 {
    constructor(a6, a7, a8) {
        super();
        v3.getTimezoneOffset();
    }
}
new C4(v3, v3, v3);
