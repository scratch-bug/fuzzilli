function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function* f6(a7, a8, a9) {
        const v10 = /3ODm[x]*/imugyd;
        function F11(a13) {
            if (!new.target) { throw 'must be called with new'; }
            this.c = v10;
        }
        return f6;
    }
    f6(a5, F0, f6(a4, a3, F0));
    %OptimizeMaglevOnNextCall(f6);
    f6();
}
new F0();
