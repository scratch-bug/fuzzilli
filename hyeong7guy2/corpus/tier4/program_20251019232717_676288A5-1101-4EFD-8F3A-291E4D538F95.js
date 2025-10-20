function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            const v18 = {
                ...SharedArrayBuffer,
                construct(a16, a17) {
                    return a8;
                },
            };
            v18.construct(a3, v18);
        }
        new F9(F9, a3, a7, F1);
        return a8;
    }
    f5(SharedArrayBuffer, SharedArrayBuffer, SharedArrayBuffer);
    %OptimizeFunctionOnNextCall(f5);
}
new F1(F1, F1);
const v23 = new F1();
const t21 = v23.constructor;
new t21();
