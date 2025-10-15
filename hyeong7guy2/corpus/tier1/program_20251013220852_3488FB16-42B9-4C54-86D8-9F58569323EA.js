function f0() {
    return f0;
}
function f1(a2) {
    return f1;
}
Object.defineProperty(f0, "toString", { writable: true, configurable: true, value: f1 });
function f3() {
    return f0;
}
class C4 extends f3 {
}
const v5 = new C4();
function F6(a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    const v11 = this.constructor;
    try { v11(C4, a8); } catch (e) {}
}
F6.prototype = F6;
new F6(v5);
