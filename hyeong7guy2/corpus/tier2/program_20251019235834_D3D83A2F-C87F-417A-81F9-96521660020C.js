class C1 {
}
function f3(a4) {
    for (let v5 = 0; v5 < 5; v5++) {
        function f6(a7, a8) {
            const v10 = new SharedArrayBuffer(v5, SharedArrayBuffer);
            const v12 = new DataView(v10);
            let v13;
            try { v13 = v12.getUint16(C1); } catch (e) {}
            v13 - v13;
            return a4;
        }
        f6();
        %OptimizeFunctionOnNextCall(f6);
    }
    return a4;
}
function F16(a18) {
    if (!new.target) { throw 'must be called with new'; }
}
for (let i21 = 0, i22 = 10; i22; i22--) {
}
F16[Symbol.toPrimitive] = f3;
const v32 = {
    o(a30, a31) {
        super[F16] = 12234;
        return a30;
    },
};
v32.o();
