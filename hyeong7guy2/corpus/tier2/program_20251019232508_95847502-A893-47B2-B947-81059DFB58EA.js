function f4(a5) {
    const v9 = new SharedArrayBuffer(3, { maxByteLength: 7 });
    const v10 = new Uint8Array(v9);
    v10.lastIndexOf();
}
function F12(a14) {
    if (!new.target) { throw 'must be called with new'; }
}
F12[Symbol.toPrimitive] = f4;
const v19 = {
    o(a17, a18) {
        super[F12] = 12234;
        return a17;
    },
};
v19.o();
