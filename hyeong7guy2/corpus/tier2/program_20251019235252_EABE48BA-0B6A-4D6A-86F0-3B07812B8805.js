function f2(a3) {
    for (let v4 = 0; v4 < 5; v4++) {
        function f5(a6, a7) {
            const v8 = a6 === a6;
            const v11 = new SharedArrayBuffer(7);
            const v13 = new DataView(v11);
            return v13.getInt16(v8);
        }
        f5(12234, f5);
        %OptimizeFunctionOnNextCall(f5);
    }
}
function F16(a18) {
    if (!new.target) { throw 'must be called with new'; }
}
for (let i21 = 0, i22 = 10; i22; i22--) {
}
F16[Symbol.toPrimitive] = f2;
const v32 = {
    o(a30, a31) {
        super[F16] = 12234;
        return F16;
    },
};
v32.o();
