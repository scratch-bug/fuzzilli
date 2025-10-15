function f1(a2) {
    let v4 = 3;
    v4++;
    const v6 = new SharedArrayBuffer(v4);
    const v8 = new Uint8Array(v6);
    return v8.toBase64();
}
function F10(a12) {
    if (!new.target) { throw 'must be called with new'; }
}
F10[Symbol.toPrimitive] = f1;
const v17 = {
    o(a15, a16) {
        super[F10] = a15;
        return F10;
    },
};
v17.o(v17, f1);
