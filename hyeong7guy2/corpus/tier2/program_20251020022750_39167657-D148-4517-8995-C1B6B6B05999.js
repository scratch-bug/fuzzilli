function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function f8(a9, a10) {
            function f11(a12, a13, a14) {
                return a12.arguments;
            }
            return f11(f11, a3, a10, a9, this);
        }
        new Promise(f8);
        return a2;
    }
    f4(a2, a2, F0);
    %OptimizeFunctionOnNextCall(f4);
}
const v20 = new F0(F0, F0);
const v21 = v20.constructor;
new v21(v21, v21, F0, v21, F0);
new F0();
