function f2(a3) {
    for (let v4 = 0; v4 < 5; v4++) {
        function f5(a6, a7) {
            a6 + a6;
            const v9 = a6 === a6;
            try { SharedArrayBuffer(); } catch (e) {}
            const v13 = new SharedArrayBuffer(7);
            const v15 = new DataView(v13);
            return v15.setUint16(f5, v9);
        }
        f5(12234);
        %OptimizeFunctionOnNextCall(f5);
    }
    return a3;
}
function F18(a20) {
    if (!new.target) { throw 'must be called with new'; }
}
for (let i23 = 0, i24 = 10; i24; i24--) {
}
F18[Symbol.toPrimitive] = f2;
const v34 = {
    o(a32, a33) {
        super[F18] = 12234;
        return a33;
    },
};
v34.o();
