function f2(a3) {
    for (let v4 = 0; v4 < 5; v4++) {
        function f5(a6, a7) {
            const v9 = new SharedArrayBuffer(12234);
            const v11 = new DataView(v9);
            let v12 = v11.getBigInt64();
            v12++;
            return eval();
        }
        f5(f5, a3);
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
        return 12234;
    },
};
v33.o(v33, 12234);
