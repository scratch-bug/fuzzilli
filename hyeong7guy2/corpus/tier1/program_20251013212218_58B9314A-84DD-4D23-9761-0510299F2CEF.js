class C0 {
    constructor() {
        this.p = 1.1;
    }
    m() {
    }
}
function f4(a5) {
    return C0.prototype.m.call();
}
for (let i10 = 0; i10 < 100000; i10++) {
    new C0();
    f4(f4);
}
