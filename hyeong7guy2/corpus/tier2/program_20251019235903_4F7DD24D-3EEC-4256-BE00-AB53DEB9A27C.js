function f2(a3) {
    for (let v4 = 0; v4 < 5; v4++) {
        function f5(a6, a7) {
            const v9 = new SharedArrayBuffer();
            const v11 = new DataView(v9);
            let v12;
            try { v12 = v11.getFloat64(12234); } catch (e) {}
            return v12 === a3;
        }
        f5();
        %OptimizeFunctionOnNextCall(f5);
    }
}
function F15(a17) {
    if (!new.target) { throw 'must be called with new'; }
}
for (let i20 = 0, i21 = 10; i21; i21--) {
}
F15[Symbol.toPrimitive] = f2;
const v31 = {
    o(a29, a30) {
        super[F15] = 12234;
        return Symbol;
    },
};
v31.o();
