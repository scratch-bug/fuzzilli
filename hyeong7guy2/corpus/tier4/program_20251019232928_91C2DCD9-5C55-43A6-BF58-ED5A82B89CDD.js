const v2 = { maxByteLength: 108 };
const v4 = new SharedArrayBuffer(108, v2);
const v6 = new Int16Array(v4);
function F7(a9, a10, a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    const v14 = new Uint16Array(v2, 108);
    const t6 = v14.constructor;
    new t6(a9);
}
const v17 = new F7(Int16Array, v2, v2, 108);
const t10 = v17.constructor;
const v19 = new t10();
const t12 = v19.constructor;
new t12(v6);
