function f2(a3) {
    const v6 = new SharedArrayBuffer(3);
    const v8 = new Uint8Array(v6);
    v8.setFromBase64(a3);
}
function F10(a12) {
    if (!new.target) { throw 'must be called with new'; }
}
F10[Symbol.toPrimitive] = f2;
const v17 = {
    o(a15, a16) {
        super[F10] = 12234;
        return a16;
    },
};
v17.o(F10, v17);
