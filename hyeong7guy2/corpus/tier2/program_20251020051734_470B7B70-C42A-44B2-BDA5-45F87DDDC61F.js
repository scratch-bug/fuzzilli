function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function f8(a9, a10) {
            function f11(a12, a13, a14) {
                const v15 = a12.arguments;
                function f16(a17) {
                    return f16;
                }
                return v15;
            }
            f11(f11, a3, a10, a9);
            return a2;
        }
        new Promise(f8);
        return F0;
    }
    f4(this, a3, F0);
    %OptimizeFunctionOnNextCall(f4);
}
const v22 = new F0();
const v23 = v22.constructor;
new v23(F0);
new F0(v23, F0);
