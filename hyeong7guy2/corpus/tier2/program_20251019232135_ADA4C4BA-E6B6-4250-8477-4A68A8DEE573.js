function f3() {
    return 12;
}
function f4(a5) {
    const v10 = new SharedArrayBuffer(3, { maxByteLength: 1000 });
    const v12 = new Uint8Array(v10);
    const v13 = Symbol.toPrimitive;
    v12[v13] = f3;
    v12[2] = v12;
    return v13;
}
function F14(a16) {
    if (!new.target) { throw 'must be called with new'; }
}
F14[Symbol.toPrimitive] = f4;
const v21 = {
    o(a19, a20) {
        super[F14] = 12234;
        return a20;
    },
};
v21.o(12234, Symbol);
