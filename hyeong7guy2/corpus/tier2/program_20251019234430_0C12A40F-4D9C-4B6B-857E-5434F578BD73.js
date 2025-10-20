function f2(a3) {
    for (let v4 = 0; v4 < 5; v4++) {
        function f5(a6, a7) {
            const v10 = new SharedArrayBuffer(7);
            const v12 = new DataView(v10);
            return v12.setInt8();
        }
        f5(v4, f5);
        %OptimizeFunctionOnNextCall(f5);
    }
}
function F15(a17) {
    if (!new.target) { throw 'must be called with new'; }
}
for (let i20 = 0, i21 = 10; i21; i21--) {
}
F15[Symbol.toPrimitive] = f2;
const v31 = {
    o(a29, a30) {
        super[F15] = 12234;
        return 12234;
    },
};
v31.o();
