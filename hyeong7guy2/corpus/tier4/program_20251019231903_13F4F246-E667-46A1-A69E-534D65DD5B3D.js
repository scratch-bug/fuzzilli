const v2 = new Uint32Array(3);
function F3(a5, a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v2;
}
const v9 = new F3(Uint32Array, v2, F3, Uint32Array);
const v10 = v9.f;
const v13 = new Uint8Array(3);
v10.set(v13);
