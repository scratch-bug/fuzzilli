function f0() {
    return f0;
}
function f1(a2) {
    Object.length = 2;
    return f1;
}
Object.defineProperty(f0, "toString", { writable: true, configurable: true, value: f1 });
function f5() {
    return f0;
}
class C6 extends f5 {
}
const v7 = new C6();
const v8 = new C6();
const v9 = new C6();
function F10(a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    const v15 = this.constructor;
    try { new v15(v7, a12); } catch (e) {}
    const t20 = a13?.toString;
    t20();
}
new F10(v8, v7);
new F10(C6, v9);
