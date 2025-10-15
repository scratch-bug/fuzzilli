function f2(a3) {
    const v8 = new SharedArrayBuffer(3, { maxByteLength: 1000 });
    const v10 = new Uint8Array(v8);
    let v11;
    try { v11 = v10.setFromBase64(a3, a3); } catch (e) {}
    return v11;
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
v19.o();
