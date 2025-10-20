function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6) {
        function F9(a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            function f14(a15, a16, a17) {
                a15 in a16;
                return a2;
            }
            try { f14(a11, "b"); } catch (e) {}
        }
        const v20 = new F9(1000);
        return v20;
    }
    f4();
    %PrepareFunctionForOptimization(f4);
    %OptimizeFunctionOnNextCall(f4);
    f4(F0, F0);
}
new F0(F0, F0);
