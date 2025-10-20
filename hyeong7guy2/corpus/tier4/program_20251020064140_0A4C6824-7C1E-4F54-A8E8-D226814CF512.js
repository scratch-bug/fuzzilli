const v1 = new Uint32Array();
const v6 = new SharedArrayBuffer(108, { maxByteLength: 108 });
const v8 = new Int16Array(v6);
function F9(a11) {
    if (!new.target) { throw 'must be called with new'; }
    const t5 = a11.constructor;
    new t5(v8);
}
new F9(v1);
