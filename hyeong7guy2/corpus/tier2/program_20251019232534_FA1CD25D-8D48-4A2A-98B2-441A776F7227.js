function f2(a3) {
    const v5 = new SharedArrayBuffer(65535);
    const v7 = new Uint8Array(v5);
    v7.toBase64();
}
function F9(a11) {
    if (!new.target) { throw 'must be called with new'; }
}
F9[Symbol.toPrimitive] = f2;
const v16 = {
    o(a14, a15) {
        super[F9] = a14;
        return F9;
    },
};
v16.o();
