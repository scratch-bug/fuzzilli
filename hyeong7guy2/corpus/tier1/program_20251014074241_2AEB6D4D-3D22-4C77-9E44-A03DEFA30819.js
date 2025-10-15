class C1 extends Int32Array {
}
Uint32Array[476] = C1;
function F3(a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    a5[1] = a5;
    this.e = a5;
    function f8() {
        return a6;
    }
    function f9(a10) {
        return a10;
    }
    Object.defineProperty(a6, 210, { configurable: true, get: f8, set: f9 });
}
const v11 = new F3(Uint32Array, Uint32Array);
const v12 = v11.e;
const v13 = { ...v12 };
