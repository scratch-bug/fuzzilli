let v1 = 1e-15;
v1--;
function f4(a5) {
    for (let v6 = 0; v6 < 5; v6++) {
        function f7(a8, a9) {
            const v12 = new SharedArrayBuffer(7);
            const v14 = new DataView(v12);
            return v1 >= v14.getFloat32();
        }
        f7();
        %OptimizeFunctionOnNextCall(f7);
    }
    return a5;
}
function F18(a20) {
    if (!new.target) { throw 'must be called with new'; }
}
for (let i23 = 0, i24 = 10; i24; i24--) {
}
F18[Symbol.toPrimitive] = f4;
const v34 = {
    o(a32, a33) {
        super[F18] = 12234;
        return Symbol;
    },
};
v34.o();
