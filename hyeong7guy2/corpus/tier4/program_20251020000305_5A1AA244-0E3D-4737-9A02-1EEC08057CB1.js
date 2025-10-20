const v5 = new SharedArrayBuffer(2311, { maxByteLength: 1073741825 });
const v7 = new Uint8ClampedArray(v5);
function F8(a10, a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = Int32Array;
}
const v13 = new F8();
const t7 = v13.d;
new t7(v7);
