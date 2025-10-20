function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function f8(a9, a10) {
            function f11(a12, a13, a14) {
                a12.arguments;
                return a13;
            }
            return f11(f11);
        }
        const v18 = new Promise(f8);
        return v18;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v20 = new F0(F0, F0);
const t17 = v20.constructor;
const v22 = new t17();
new F0(v22, v22);
