function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F10(a12, a13, a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            a13 >= a13;
            a15 != a15;
        }
        const v18 = new F10(Int8Array, 1825, F10, 1825);
        new F10(v18, F10);
        return a7;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
new F0(F0, F0);
const v22 = new F0(F0, F0);
new F0(F0, v22);
