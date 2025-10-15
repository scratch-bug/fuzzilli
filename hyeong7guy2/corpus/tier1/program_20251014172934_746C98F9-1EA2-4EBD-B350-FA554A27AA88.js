function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
class C4 {
}
function f5(a6, a7) {
    return F0;
}
C4.toString = f5;
const v9 = class {
}
function f10() {
    const v12 = Intl.DateTimeFormat;
    const v14 = {};
    v14.dateStyle = C4;
    return v12("os", v14);
}
Object.defineProperty(v9, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f10 });
try { new Int32Array(v9); } catch (e) {}
