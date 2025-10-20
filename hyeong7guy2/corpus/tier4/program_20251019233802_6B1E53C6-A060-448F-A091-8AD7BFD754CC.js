function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new ArrayBuffer(F0, { maxByteLength: 1000 });
const v8 = new Int16Array(v6);
Object["getOwnPropertyNames"](v8);
