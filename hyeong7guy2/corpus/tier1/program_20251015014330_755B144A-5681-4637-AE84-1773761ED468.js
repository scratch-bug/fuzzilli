function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            const v18 = {
                construct(a16, a17) {
                    return a17;
                },
            };
            function f20() {
                return Proxy;
            }
            const v21 = new Proxy(f20, v18);
            const v22 = new v21(a6, a14, v18, a6);
            v22.push(f20, v18, a3, F1, v22, a7, this, 0.2747522027226579);
        }
        new F9(a3, a4, 0.2747522027226579, f5);
        return 0.2747522027226579;
    }
    f5();
    %OptimizeFunctionOnNextCall(f5);
}
new F1(0.2747522027226579, 0.2747522027226579);
new F1(0.2747522027226579, F1);
new F1();
