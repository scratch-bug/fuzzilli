function f1(a2) {
    const v5 = new SharedArrayBuffer(1);
    const v7 = new Uint8Array(v5);
    v7.with();
}
function F9(a11) {
    if (!new.target) { throw 'must be called with new'; }
}
F9[Symbol.toPrimitive] = f1;
const v17 = {
    o(a14, a15) {
        return a15 < a15;
    },
};
v17.o(v17, F9);
