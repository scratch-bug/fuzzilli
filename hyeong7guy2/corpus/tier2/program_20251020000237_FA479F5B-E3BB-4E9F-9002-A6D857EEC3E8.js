function f2(a3) {
    for (let v4 = 0; v4 < 5; v4++) {
        function f5(a6, a7) {
            a6.f = a6;
            const v9 = new SharedArrayBuffer(12234);
            const v11 = new DataView(v9);
            try { v11.setUint16(DataView); } catch (e) {}
            let v13 = v11.getBigInt64();
            v13++;
            const v16 = eval();
            v16 ?? v16;
        }
        f5(f5);
        %OptimizeFunctionOnNextCall(f5);
    }
    return a3;
}
function F19(a21) {
    if (!new.target) { throw 'must be called with new'; }
}
for (let i24 = 0, i25 = 10; i25; i25--) {
}
F19[Symbol.toPrimitive] = f2;
const v35 = {
    o(a33, a34) {
        super[F19] = 12234;
        return this;
    },
};
v35.o();
