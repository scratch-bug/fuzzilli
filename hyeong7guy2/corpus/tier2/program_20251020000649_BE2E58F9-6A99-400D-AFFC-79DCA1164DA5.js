function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = new SharedArrayBuffer(F0, { maxByteLength: F0 });
const v7 = new Uint8ClampedArray(v5);
const v8 = { ...v7 };
