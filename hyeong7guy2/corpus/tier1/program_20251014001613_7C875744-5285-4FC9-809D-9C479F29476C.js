Symbol.iterator;
const v2 = {};
const v5 = new Float32Array(2532);
const t3 = v5.constructor;
new t3(v2, 2532, v5);
class C8 extends Float32Array {
}
const v9 = new C8();
function f10() {
}
Object.defineProperty(v9, Symbol, { writable: true, configurable: true, enumerable: true, value: f10 });
Uint16Array.prototype = Uint16Array;
function F14(a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = f10;
    a17 ?? a17;
    function f19(a20) {
        for (const v21 in this) {
        }
        return f19;
    }
    f19.c = f19;
    Object.defineProperty(this, "g", { configurable: true, set: f19 });
    this.g = a17;
}
const v22 = new F14();
v22.e = Symbol;
new F14(F14, F14);
