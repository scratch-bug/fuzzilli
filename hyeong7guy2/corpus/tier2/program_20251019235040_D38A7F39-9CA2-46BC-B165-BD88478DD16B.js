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
                return f20;
            }
            const v21 = new Proxy(f20, v18);
            const v22 = new v21();
            v22.push(f20, v18, a3, F1, v22, a7, this, 0.0, a12);
        }
        const v24 = new F9(a7, a6, a6, a8);
        return v24;
    }
    f5(a3, F1, f5);
    %OptimizeFunctionOnNextCall(f5);
}
const v26 = new F1();
const v27 = new F1(v26, v26);
new F1(v27, F1);
