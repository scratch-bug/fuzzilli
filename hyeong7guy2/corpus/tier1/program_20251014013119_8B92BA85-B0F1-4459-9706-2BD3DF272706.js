function f1(a2, a3) {
    return a2;
}
Int16Array[Symbol] = f1;
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    function f9(a10, a11, a12) {
        function f13(a14, a15) {
            return f1;
        }
        a10.toString = f13;
        return a7;
    }
    f9(Int16Array);
    %OptimizeFunctionOnNextCall(f9);
}
const v17 = new F5();
new F5(F5, v17);
new F5();
