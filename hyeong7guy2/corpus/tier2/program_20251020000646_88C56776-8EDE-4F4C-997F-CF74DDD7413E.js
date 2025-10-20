function f2(a3) {
    for (let v4 = 0; v4 < 5; v4++) {
        function f5(a6, a7) {
            return ArrayBuffer.isView(v4);
        }
        f5(12234, v4);
        %OptimizeFunctionOnNextCall(f5);
    }
}
function F11(a13) {
    if (!new.target) { throw 'must be called with new'; }
}
for (let i16 = 0, i17 = 10; i17; i17--) {
}
F11[Symbol.toPrimitive] = f2;
const v27 = {
    o(a25, a26) {
        super[F11] = 12234;
        return 12234;
    },
};
v27.o(12234, F11);
