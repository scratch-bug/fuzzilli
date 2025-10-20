function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = Array.prototype;
    t2[1122] = 128;
}
new F0();
const v12 = [,];
const v13 = class {
}
function f14() {
    return v12.pop();
}
Object.defineProperty(v13, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f14 });
try { new Int32Array(v13); } catch (e) {}
