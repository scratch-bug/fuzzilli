function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function f8(a9, a10) {
            function f11(a12, a13, a14) {
                return a12.arguments;
            }
            f11(f11, a3, a10, a9);
            return a5;
        }
        new Promise(f8);
        return a6;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v20 = new F0();
const v21 = v20.constructor;
new v21(F0, v21);
new F0();
