function f3(a4) {
    const v7 = new SharedArrayBuffer(3);
    const v8 = new Uint8Array(v7);
    v8.includes(3);
}
function F10(a12) {
    if (!new.target) { throw 'must be called with new'; }
}
F10[Symbol.toPrimitive] = f3;
const v17 = {
    o(a15, a16) {
        super[F10] = 12234;
        return this;
    },
};
v17.o();
