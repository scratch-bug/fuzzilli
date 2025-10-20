function f2(a3) {
    for (let v4 = 0; v4 < 5; v4++) {
        function f5(a6, a7) {
            const v10 = new SharedArrayBuffer(7);
            const v12 = new DataView(v10);
            v12.setUint8(a6, a6);
            return v4;
        }
        f5(f5, 12234);
        %OptimizeFunctionOnNextCall(f5);
    }
    return a3;
}
function F15(a17) {
    if (!new.target) { throw 'must be called with new'; }
}
for (let i20 = 0, i21 = 10; i21; i21--) {
}
const v27 = Symbol.toPrimitive;
F15[v27] = f2;
const v31 = {
    o(a29, a30) {
        super[F15] = 12234;
        return this;
    },
};
v31.o(v31, v27);
