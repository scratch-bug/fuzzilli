function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8) {
        const v9 = a7.log2;
        const v10 = v9(v9);
        const v11 = v9 ?? a8;
        v11 + v11;
        function F13(a15, a16) {
            if (!new.target) { throw 'must be called with new'; }
            function F17(a19, a20) {
                if (!new.target) { throw 'must be called with new'; }
            }
            F17(v11);
            Temporal(3216, v9);
            Temporal(3216, 236, v10);
        }
        try {
            f6();
        } catch(e26) {
        }
        return F13;
    }
    f6(Math);
    %OptimizeMaglevOnNextCall(f6);
    try { f6(f6, this); } catch (e) {}
}
new F1(F1, F1);
