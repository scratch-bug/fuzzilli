function f2(a3) {
    const v6 = new SharedArrayBuffer(1);
    const v8 = new Uint8Array(v6);
    Uint16Array.from(v8);
}
function F11(a13) {
    if (!new.target) { throw 'must be called with new'; }
}
F11[Symbol.toPrimitive] = f2;
const v18 = {
    o(a16, a17) {
        super[F11] = 12234;
        return a16;
    },
};
v18.o();
