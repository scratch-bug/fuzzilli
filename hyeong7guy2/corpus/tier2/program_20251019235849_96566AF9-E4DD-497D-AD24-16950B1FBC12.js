function f3(a4) {
    for (let v5 = 0; v5 < 5; v5++) {
        function f6(a7, a8) {
            for (const v9 in Symbol) {
            }
            const v12 = new SharedArrayBuffer(7);
            const v14 = new DataView(v12);
            return 1e-15 >= v14.getFloat32(a8);
        }
        f6();
        %OptimizeFunctionOnNextCall(f6);
    }
}
function F18(a20) {
    if (!new.target) { throw 'must be called with new'; }
}
for (let i23 = 0, i24 = 10; i24; i24--) {
}
const v30 = Symbol.toPrimitive;
F18[v30] = f3;
const v34 = {
    o(a32, a33) {
        super[F18] = 12234;
        return v30;
    },
};
v34.o(f3, Symbol);
