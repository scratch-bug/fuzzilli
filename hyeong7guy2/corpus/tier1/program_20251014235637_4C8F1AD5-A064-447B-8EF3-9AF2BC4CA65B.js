function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
function f6(a7, a8) {
    return F1;
}
const v9 = class {
}
function f10() {
    const v11 = [268435456,-45411,-12,-1,4,-1911783660,10,-2147483649];
    const v12 = {};
    v12[Symbol.toPrimitive] = f6;
    const v16 = new Uint8ClampedArray(3);
    v16.lastIndexOf(v11, v12);
    return v12;
}
Object.defineProperty(v9, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f10 });
try { new Int32Array(v9); } catch (e) {}
