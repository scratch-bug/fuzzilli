class C0 {
}
function f1(a2) {
    return C0;
}
const v4 = String.prototype;
Object.defineProperty(v4, Symbol.toPrimitive, { configurable: true, value: f1 });
const v7 = v4.toUpperCase;
try { v7.call(v4); } catch (e) {}
