function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            try { a14.apply(this); } catch (e) {}
        }
        new F9(a6, a7, -1, a2);
        return F0;
    }
    f4(F0, a3, F0);
    %OptimizeFunctionOnNextCall(f4);
}
const v18 = new F0(F0);
new F0();
new F0(v18, v18);
