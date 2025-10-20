function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v8 = new SharedArrayBuffer(1878, { maxByteLength: 1073741824 });
const v9 = new Int16Array(v8);
v9.includes(F0);
