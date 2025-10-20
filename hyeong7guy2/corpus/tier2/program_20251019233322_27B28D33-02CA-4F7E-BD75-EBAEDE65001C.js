function f2(a3) {
    let v5 = 25969;
    v5++;
    const v7 = new SharedArrayBuffer(v5);
    const v9 = new Uint8Array(v7);
    v9.copyWithin();
}
function F11(a13) {
    if (!new.target) { throw 'must be called with new'; }
}
F11[Symbol.toPrimitive] = f2;
const v18 = {
    o(a16, a17) {
        super[F11] = 12234;
        return a17;
    },
};
v18.o(F11, 12234);
