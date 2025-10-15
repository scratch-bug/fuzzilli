function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = /Ra\S(\1a)/ud;
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    const v9 = this.constructor;
    try { new v9(a8, v4); } catch (e) {}
    a7.e = a7;
    a8.d = a8;
}
new F5(F0, F0);
new F5(F0, F0);
const v17 = new SharedArrayBuffer(3, { maxByteLength: 1000 });
const v19 = new Uint8Array(v17);
v19[2] = v19;
