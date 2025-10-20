function f2(a3) {
    for (let v4 = 0; v4 < 5; v4++) {
        function f5(a6, a7) {
            const v9 = new SharedArrayBuffer();
            const v11 = new DataView(v9);
            try { v11.getBigUint64(a3, v11, f5, Symbol, a3); } catch (e) {}
            return a3;
        }
        f5(f2, 12234);
        %OptimizeFunctionOnNextCall(f5);
    }
    return a3;
}
function F14(a16) {
    if (!new.target) { throw 'must be called with new'; }
}
for (let i19 = 0, i20 = 10; i20; i20--) {
}
F14[Symbol.toPrimitive] = f2;
const v30 = {
    o(a28, a29) {
        super[F14] = 12234;
        return Symbol;
    },
};
v30.o(v30, 12234);
