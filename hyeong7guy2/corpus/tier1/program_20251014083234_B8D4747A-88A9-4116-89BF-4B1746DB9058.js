class C1 extends Int32Array {
}
Uint32Array[476] = C1;
function F3(a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    a5[1] = a5;
    this.e = a5;
    function f8() {
        return a7;
    }
    function f9(a10) {
        return a10;
    }
    Object.defineProperty(a6, 3391783189, { configurable: true, get: f8, set: f9 });
}
const v11 = new F3(Uint32Array, Uint32Array);
const v12 = v11.e;
v12[210] = v12;
const v13 = { ...v12 };
