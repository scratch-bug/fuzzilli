function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            try { a14.apply(); } catch (e) {}
        }
        const v16 = new F9(a6, a7, -1, a2);
        return v16;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
new F0(F0);
const v19 = new F0(F0, F0);
new F0(F0, v19);
