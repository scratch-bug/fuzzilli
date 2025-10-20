function f3(a4) {
    const v7 = new SharedArrayBuffer(7);
    const v9 = new Uint8Array(v7, 5);
    v9.toBase64();
}
function F11(a13) {
    if (!new.target) { throw 'must be called with new'; }
}
F11[Symbol.toPrimitive] = f3;
const v18 = {
    o(a16, a17) {
        super[F11] = 12234;
        return a16;
    },
};
v18.o();
