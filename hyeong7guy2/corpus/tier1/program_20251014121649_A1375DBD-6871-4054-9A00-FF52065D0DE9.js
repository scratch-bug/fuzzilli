function f5(a6) {
    const v10 = new SharedArrayBuffer(3, { maxByteLength: 7 });
    const v11 = new Uint8Array(v10);
    return v11.includes(undefined);
}
function F13(a15) {
    if (!new.target) { throw 'must be called with new'; }
}
const v16 = Symbol.toPrimitive;
F13[v16] = f5;
const v20 = {
    o(a18, a19) {
        super[F13] = 12234;
        return v16;
    },
};
v20.o(undefined, 7);
