Symbol.maxByteLength = 782538897;
function f3(a4) {
    for (let v5 = 0; v5 < 5; v5++) {
        function f6(a7, a8) {
            const v10 = new SharedArrayBuffer(12234, Symbol);
            const v12 = new DataView(v10);
            v12.byteOffset;
            return Symbol;
        }
        f6();
        %OptimizeFunctionOnNextCall(f6);
    }
    return a4;
}
function F15(a17) {
    if (!new.target) { throw 'must be called with new'; }
}
F15[Symbol.toPrimitive] = f3;
for (let i21 = 0, i22 = 10; i22; i22--) {
}
const v31 = {
    o(a29, a30) {
        super[F15] = 12234;
        return Symbol;
    },
};
v31.o();
