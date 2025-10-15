class C0 {
}
class C3 extends Int32Array {
}
Uint32Array[476] = C3;
function F5(a7, a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    Object.defineProperty(a8, 1, { configurable: true, enumerable: true, value: C0 });
    a7[2] = Map;
    a8[0] = a8;
    this.e = a7;
}
const v10 = new F5(Uint32Array, Uint32Array);
const v11 = v10.e;
const v12 = { ...v11 };
