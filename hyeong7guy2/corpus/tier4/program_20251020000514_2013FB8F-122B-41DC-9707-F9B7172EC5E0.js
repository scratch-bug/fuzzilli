function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            a11.arguments;
        }
        const v16 = new F9(F9, a2, a6, -1);
        return v16;
    }
    f4(a2, this, f4);
    %OptimizeFunctionOnNextCall(f4);
}
const v18 = new F0();
const v19 = new F0(F0, v18);
new F0(v19, F0);
