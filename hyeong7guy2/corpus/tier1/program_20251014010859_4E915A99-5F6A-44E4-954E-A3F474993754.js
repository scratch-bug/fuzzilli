const v2 = new Uint32Array(767);
function F3(a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    let v8;
    try { v8 = a6(a5, Uint32Array, F3); } catch (e) {}
    a7[476] = v8;
    this.e = a6;
}
const v9 = new F3(Uint32Array, Uint32Array, v2);
Uint32Array.c = v9;
const v10 = new F3(v9, Uint32Array, Uint32Array);
const v11 = v10.e;
const v12 = { ...v11 };
