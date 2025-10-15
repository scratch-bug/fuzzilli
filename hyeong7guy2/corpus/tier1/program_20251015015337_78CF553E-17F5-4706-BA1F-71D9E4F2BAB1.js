function f2(a3) {
    const v8 = new SharedArrayBuffer(3, { maxByteLength: 1000 });
    const v10 = new Uint8Array(v8);
    return v10.setFromHex();
}
function F12(a14) {
    if (!new.target) { throw 'must be called with new'; }
}
F12[Symbol.toPrimitive] = f2;
const v19 = {
    o(a17, a18) {
        super[F12] = 12234;
        return this;
    },
};
try { v19.o(12234, v19); } catch (e) {}
