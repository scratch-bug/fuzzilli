const v1 = new Uint8ClampedArray();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        function f10(a11, a12) {
            function f13(a14, a15, a16) {
                return a15;
            }
            v1[3] = f13;
            return a9;
        }
        new Promise(f10);
        return a4;
    }
    f6(Uint8ClampedArray, F2, Uint8ClampedArray);
    %OptimizeFunctionOnNextCall(f6);
}
new F2(v1, v1);
const v21 = new F2();
new F2(F2, v21);
