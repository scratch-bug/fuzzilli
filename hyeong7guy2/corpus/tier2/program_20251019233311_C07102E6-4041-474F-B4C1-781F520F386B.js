function f1(a2) {
    const v7 = new ArrayBuffer(1000, { maxByteLength: 1000 });
    const v9 = new Uint8ClampedArray(v7);
    v9.set(a2);
}
function F11(a13) {
    if (!new.target) { throw 'must be called with new'; }
}
const v15 = Symbol.toPrimitive;
F11[v15] = f1;
for (let i18 = 0, i19 = 10; i19; i19--) {
}
const v28 = {
    o(a26, a27) {
        super[F11] = 12234;
        return v15;
    },
};
v28.o();
