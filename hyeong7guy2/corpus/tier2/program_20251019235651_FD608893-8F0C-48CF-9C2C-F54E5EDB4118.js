function f2(a3) {
    for (let v4 = 0; v4 < 5; v4++) {
        function f5(a6, a7) {
            const v10 = new SharedArrayBuffer(7);
            const v12 = new DataView(v10);
            const v13 = v12.getUint32();
            v13 * v13;
            return a3;
        }
        f5();
        %OptimizeFunctionOnNextCall(f5);
    }
    return a3;
}
function F16(a18) {
    if (!new.target) { throw 'must be called with new'; }
}
for (let i21 = 4294967296, i22 = 10; i22; i22--) {
}
F16[Symbol.toPrimitive] = f2;
const v32 = {
    o(a30, a31) {
        super[F16] = 12234;
        return a30;
    },
};
v32.o(F16, f2);
