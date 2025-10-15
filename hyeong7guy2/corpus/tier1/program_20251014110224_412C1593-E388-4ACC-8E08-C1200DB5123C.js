function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5) {
        Temporal.e = Temporal;
        Temporal.PlainDateTime;
        function F10(a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            a13++;
            this.e = a13;
        }
        const v15 = new F10("2147483647", -3612);
        const v17 = new F10(v15.e, F10);
        return v17;
    }
    f4(f4(f4));
    %OptimizeMaglevOnNextCall(f4);
    f4(f4);
}
new F0(F0, F0);
