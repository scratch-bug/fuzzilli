function f3(a4) {
    for (let v5 = 0; v5 < 5; v5++) {
        function f6(a7, a8) {
            const v10 = new SharedArrayBuffer(v5);
            const v12 = new DataView(v10);
            let v13;
            try { v13 = v12.getUint8(5.199840406937158e+307); } catch (e) {}
            return v13;
        }
        f6(a4, 5.199840406937158e+307);
        %OptimizeFunctionOnNextCall(f6);
    }
    return 12234;
}
function F15(a17) {
    if (!new.target) { throw 'must be called with new'; }
}
for (let i20 = 0, i21 = 10; i21; i21--) {
}
F15[Symbol.toPrimitive] = f3;
const v31 = {
    o(a29, a30) {
        super[F15] = 12234;
        return f3;
    },
};
v31.o();
