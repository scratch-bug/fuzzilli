function f0() {
    return f0;
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        function F10(a12, a13, a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            a13.prototype;
        }
        try { F10(f6, f0); } catch (e) {}
        new F10(Int16Array, F2);
        return a7;
    }
    f6();
    %OptimizeFunctionOnNextCall(f6);
}
const v20 = new F2();
new F2(v20, v20);
new F2(F2, v20);
