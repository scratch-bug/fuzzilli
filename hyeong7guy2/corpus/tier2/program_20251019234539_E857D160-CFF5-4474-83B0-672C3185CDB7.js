function f2(a3) {
    for (let v4 = 0; v4 < 5; v4++) {
        function f5(a6, a7) {
            const v8 = -a6;
            const v10 = new SharedArrayBuffer();
            const v12 = new DataView(v10);
            try { v12.getUint8(v8); } catch (e) {}
            try { v12.setFloat64(v8); } catch (e) {}
            return v4;
        }
        f5();
        %OptimizeFunctionOnNextCall(f5);
    }
    return a3;
}
function F16(a18) {
    if (!new.target) { throw 'must be called with new'; }
}
for (let i21 = 0, i22 = 10; i22; i22--) {
}
const v28 = Symbol.toPrimitive;
F16[v28] = f2;
const v32 = {
    o(a30, a31) {
        super[F16] = 12234;
        return v28;
    },
};
v32.o();
