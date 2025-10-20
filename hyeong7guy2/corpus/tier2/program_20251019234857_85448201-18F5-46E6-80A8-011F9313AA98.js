function f1(a2) {
    for (let v3 = 0; v3 < 5; v3++) {
        function f4(a5, a6) {
            const v9 = new SharedArrayBuffer(7);
            const v11 = new DataView(v9);
            for (let v12 = 0; v12 < 25; v12++) {
                v11["p" + v12] = v12;
            }
            v11.getUint8();
            return a2;
        }
        f4();
        %OptimizeFunctionOnNextCall(f4);
    }
}
function F17(a19) {
    if (!new.target) { throw 'must be called with new'; }
}
for (let i22 = 0, i23 = 10; i23; i23--) {
}
F17[Symbol.toPrimitive] = f1;
const v33 = {
    o(a31, a32) {
        super[F17] = a31;
        return a32;
    },
};
v33.o(v33, Symbol);
