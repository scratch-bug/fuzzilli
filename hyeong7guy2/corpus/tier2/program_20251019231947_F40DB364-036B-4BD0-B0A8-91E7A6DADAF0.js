function f1(a2) {
    for (let v3 = 0; v3 < 5; v3++) {
        function f4(a5, a6) {
            const v8 = new Map(a5);
            const v9 = v8.keys();
            for (let i12 = 0, i13 = 10; i13; i13--) {
            }
            for (const v19 of v9) {
            }
            return Map;
        }
        f4();
        %OptimizeFunctionOnNextCall(f4);
    }
    return 12234;
}
function F21(a23) {
    if (!new.target) { throw 'must be called with new'; }
}
F21[Symbol.toPrimitive] = f1;
for (let i28 = 0, i29 = 10; i29; i29--) {
}
const v38 = {
    o(a36, a37) {
        super[F21] = 12234;
        return 12234;
    },
};
v38.o(v38, Symbol);
