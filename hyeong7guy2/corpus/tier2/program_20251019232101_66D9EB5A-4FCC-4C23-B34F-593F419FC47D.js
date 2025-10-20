function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = "valueOf";
    this.f = "valueOf";
}
new F1();
new F1();
class C5 extends F1 {
    static get b() {
        try { this(this, "valueOf", this, this); } catch (e) {}
        return this;
    }
    e;
}
new C5();
new C5();
[-2.2250738585072014e-308,-1.5987373570000928e+308,-901789.7334750027,9.45526104864756e+307,4.0,5.1753839214706066];
function f13() {
    return C5;
}
new Int32Array(1000);
function f18(a19, a20, a21) {
    return a21;
}
const v24 = { type: "function" };
Object.defineProperty(v24, "flushDenormals", { writable: true, enumerable: true, value: f13 });
new Uint8ClampedArray(268435441);
new Worker(f18, v24);
