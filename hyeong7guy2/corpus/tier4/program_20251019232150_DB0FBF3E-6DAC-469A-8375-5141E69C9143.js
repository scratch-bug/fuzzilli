function f0(a1, a2) {
    function F3(a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        function F7(a9, a10) {
            if (!new.target) { throw 'must be called with new'; }
            function f11(a12, a13, a14) {
                let v15 = 0;
                while (JSON.stringify(), v15 < 2) {
                    v15++;
                }
                return f0;
            }
            f11(F7, F7, this);
            %OptimizeFunctionOnNextCall(f11);
        }
        new F7();
    }
    const v23 = new F3();
    const v24 = new F3(v23, f0);
    return v24;
}
const v25 = f0(f0, f0);
f0(v25, v25);
