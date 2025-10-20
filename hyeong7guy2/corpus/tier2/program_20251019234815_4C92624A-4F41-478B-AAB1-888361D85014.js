const v2 = Symbol.for(Symbol).description;
function f4(a5) {
    for (let v6 = 0; v6 < 5; v6++) {
        function f7(a8, a9) {
            v2[4] += v6;
            return v6;
        }
        f7();
        %OptimizeFunctionOnNextCall(f7);
    }
    return a5;
}
function F11(a13) {
    if (!new.target) { throw 'must be called with new'; }
}
for (let i16 = 0, i17 = 10; i17; i17--) {
}
F11[Symbol.toPrimitive] = f4;
const v27 = {
    o(a25, a26) {
        super[F11] = 12234;
        return f4;
    },
};
v27.o();
