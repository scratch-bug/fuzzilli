function f2(a3) {
    for (let v4 = 0; v4 < 5; v4++) {
        function f5(a6, a7) {
            const v9 = new SharedArrayBuffer(12234, Symbol);
            const v11 = new DataView(v9);
            v11.byteOffset;
            return a3;
        }
        f5(12234, a3);
        %OptimizeFunctionOnNextCall(f5);
    }
    return 12234;
}
function F14(a16) {
    if (!new.target) { throw 'must be called with new'; }
}
const v17 = Symbol.toPrimitive;
F14[v17] = f2;
for (let i20 = 0, i21 = 10; i21; i21--) {
}
const v30 = {
    o(a28, a29) {
        super[F14] = 12234;
        return v17;
    },
};
v30.o(Symbol, 12234);
