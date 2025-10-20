function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = Float64Array;
}
const v9 = { maxByteLength: 268435440 };
const v11 = new ArrayBuffer(28, v9);
const v13 = new Uint32Array(v11);
const v14 = new F1(28, v9, F1, F1);
const t8 = v14.b;
new t8(v13);
