function f2(a3) {
    for (let v4 = 0; v4 < 5; v4++) {
        function f5(a6, a7) {
            const v10 = new SharedArrayBuffer(7);
            eval();
            const v14 = new DataView(v10);
            v14.setFloat16(a3, v14);
            return a6;
        }
        f5();
        %OptimizeFunctionOnNextCall(f5);
    }
}
function F17(a19) {
    if (!new.target) { throw 'must be called with new'; }
}
for (let i22 = 0, i23 = 10; i23; i23--) {
}
F17[Symbol.toPrimitive] = f2;
const v33 = {
    o(a31, a32) {
        super[F17] = 12234;
        return a31;
    },
};
v33.o(12234, v33);
