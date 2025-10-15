function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        class C8 {
        }
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
        }
        try { F9.apply(F9, F9, C8); } catch (e) {}
        return f4;
    }
    f4(this, a3, a2);
    %OptimizeFunctionOnNextCall(f4);
}
const v17 = new F0(F0, F0);
new F0(v17, v17);
new F0(F0, v17);
