function f3() {
    return -9007199254740990;
}
function f4(a5) {
    const v10 = new SharedArrayBuffer(3, { maxByteLength: 1000 });
    const v12 = new Uint8Array(v10);
    v12[Symbol.toPrimitive] = f3;
    v12[2] = v12;
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
v21.o();
