function f2(a3) {
    for (let v4 = 0; v4 < 5; v4++) {
        const v5 = {};
        function f6(a7, a8) {
            const v11 = new SharedArrayBuffer(7);
            const v13 = new DataView(v11);
            v13.setInt32();
            const v15 = v13.getFloat32();
            v15 + v15;
            v5.length = v15;
            return f6;
        }
        f6();
        %OptimizeFunctionOnNextCall(f6);
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
        return F18;
    },
};
v34.o();
