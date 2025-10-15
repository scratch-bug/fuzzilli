function f1(a2) {
    const v5 = new SharedArrayBuffer(3);
    const v7 = new Uint8Array(v5);
    v7.toBase64();
}
function F9(a11) {
    if (!new.target) { throw 'must be called with new'; }
}
const v12 = Symbol.toPrimitive;
F9[v12] = f1;
const v16 = {
    o(a14, a15) {
        super[F9] = a14;
        return Symbol;
    },
};
v16.o(v12, v12);
