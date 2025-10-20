function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8() {
            if (!new.target) { throw 'must be called with new'; }
        }
        return Math.asin(F8);
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v13 = new F0(F0, F0);
const v14 = new F0(v13, F0);
new F0(v14, v14);
