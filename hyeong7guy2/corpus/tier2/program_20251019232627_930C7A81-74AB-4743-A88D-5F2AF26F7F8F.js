function f2(a3) {
    const v5 = new SharedArrayBuffer(64);
    const v7 = new Uint8Array(v5);
    try { v7.setFromHex(a3); } catch (e) {}
}
function F9(a11) {
    if (!new.target) { throw 'must be called with new'; }
}
const v12 = Symbol.toPrimitive;
F9[v12] = f2;
const v16 = {
    o(a14, a15) {
        super[F9] = 64;
        return 64;
    },
};
v16.o(64, v12);
