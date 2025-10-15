class C2 extends Int32Array {
}
Uint32Array[476] = C2;
function F4(a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    a6[2] = Map;
    a7[11] = a7;
    a6[1] = a6;
    this.e = a6;
    function f9() {
        return F4;
    }
    Object.defineProperty(a7, 210, { configurable: true, get: f9, set: a7 });
}
const v10 = new F4(Uint32Array, Uint32Array);
const v11 = v10.e;
const v12 = { ...v11 };
