function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function* f6(a7, a8, a9) {
        a3 = f6;
        const v10 = /3ODm[x]*/duygmi;
        function F11(a13) {
            if (!new.target) { throw 'must be called with new'; }
            this.c = v10;
        }
        return a9;
    }
    f6(a2, a3, this);
    f6();
    %OptimizeMaglevOnNextCall(f6);
    f6(F0, F0, F0);
}
new F0(F0, F0, F0, F0);
