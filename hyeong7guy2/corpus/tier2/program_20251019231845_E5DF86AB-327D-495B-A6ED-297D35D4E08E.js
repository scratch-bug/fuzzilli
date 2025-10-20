const v3 = class extends BigUint64Array {
}
function f5(a6) {
    const v7 = a6.slice(a6, v3);
    const v9 = new SharedArrayBuffer(512);
    const v11 = new Uint8Array(v9);
    v11.setFromHex(v7);
}
function F13(a15) {
    if (!new.target) { throw 'must be called with new'; }
}
F13[Symbol.toPrimitive] = f5;
const v20 = {
    o(a18, a19) {
        super[F13] = 64;
        return this;
    },
};
v20.o(BigUint64Array, v20);
