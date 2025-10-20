function f2(a3) {
    const v5 = new Uint8Array();
    try { v5.setFromBase64(a3, a3); } catch (e) {}
}
function F7(a9) {
    if (!new.target) { throw 'must be called with new'; }
}
F7[Symbol.toPrimitive] = f2;
const v14 = {
    o(a12, a13) {
        super[F7] = 12234;
        return F7;
    },
};
v14.o();
