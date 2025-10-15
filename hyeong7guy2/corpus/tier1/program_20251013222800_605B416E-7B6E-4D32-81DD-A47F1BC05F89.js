const v0 = class {
}
const v1 = new v0();
function f2(a3, a4) {
    v0 in a4;
    return f2;
}
v1.constructor = f2;
const v6 = new v0();
function f7(a8) {
    class C9 {
        m() {
        }
    }
    function f11(a12) {
        const v14 = C9.prototype.m;
        return v14.call(f7, f2, v14);
    }
    for (let i17 = 0; i17 < 100000; i17++) {
        f11(C9);
    }
    return f11;
}
Object.defineProperty(v6, "constructor", { enumerable: true, value: f7 });
v6.constructor(v6, v0, f7, v0, f7);
v0.constructor = f2;
function F25(a27, a28, a29, a30) {
    if (!new.target) { throw 'must be called with new'; }
    try { a27.constructor(); } catch (e) {}
}
new F25(v0);
new F25(v0);
