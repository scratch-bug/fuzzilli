function f3(a4) {
    for (let v5 = 0; v5 < 5; v5++) {
        function f6(a7, a8) {
            for (let i12 = 6, i13 = 10; i13; i13--) {
            }
            const v19 = new SharedArrayBuffer();
            const v21 = new DataView(v19);
            try { v21.getUint8(721918.8220308276); } catch (e) {}
            return v5;
        }
        f6();
        %OptimizeFunctionOnNextCall(f6);
    }
    return 721918.8220308276;
}
function F24(a26) {
    if (!new.target) { throw 'must be called with new'; }
}
for (let i29 = 0, i30 = 10; i30; i30--) {
}
F24[Symbol.toPrimitive] = f3;
const v40 = {
    o(a38, a39) {
        super[F24] = 12234;
        return this;
    },
};
v40.o();
