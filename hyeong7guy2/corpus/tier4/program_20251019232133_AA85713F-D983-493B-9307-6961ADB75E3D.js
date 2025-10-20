function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6) {
        const v7 = a5.log2;
        v7(v7);
        const v9 = v7 ?? a6;
        v9 + v9;
        function F11(a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            function F15(a17, a18) {
                if (!new.target) { throw 'must be called with new'; }
            }
            F15(v9);
        }
        try {
            f4();
        } catch(e21) {
        }
        return f4;
    }
    f4(Math);
    %OptimizeMaglevOnNextCall(f4);
    try { f4(f4, a3); } catch (e) {}
}
new F0(F0, F0);
