class C0 {
}
const v1 = new C0();
function f4(a5) {
    for (let v6 = 0; v6 < 5; v6++) {
        function f7(a8, a9) {
            v1 ?? a8;
            let v12;
            try { v12 = DataView.getFloat64(DataView, a5); } catch (e) {}
            v12 ?? v12;
            return v12 === a5;
        }
        f7(12234, f7);
        %OptimizeFunctionOnNextCall(f7);
    }
    return 12234;
}
function F16(a18) {
    if (!new.target) { throw 'must be called with new'; }
}
for (let i21 = 0, i22 = 10; i22; i22--) {
}
F16[Symbol.toPrimitive] = f4;
const v32 = {
    o(a30, a31) {
        super[F16] = 12234;
        return v1;
    },
};
v32.o();
