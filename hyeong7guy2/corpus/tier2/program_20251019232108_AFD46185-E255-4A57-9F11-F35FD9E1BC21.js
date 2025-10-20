function f2(a3) {
    let v5 = 1;
    v5++;
    const v7 = new SharedArrayBuffer(v5);
    const v9 = new Uint8Array(v7);
    v9.with(a3, Int8Array);
}
function F11(a13) {
    if (!new.target) { throw 'must be called with new'; }
}
F11[Symbol.toPrimitive] = f2;
const v19 = {
    o(a16, a17) {
        return a17 < a17;
    },
};
v19.o(v19, F11);
