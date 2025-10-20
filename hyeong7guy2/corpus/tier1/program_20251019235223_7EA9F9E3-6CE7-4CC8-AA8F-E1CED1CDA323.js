function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5) {
        function F8(a10, a11) {
            if (!new.target) { throw 'must be called with new'; }
            a11++;
            this.e = a11;
        }
        const v13 = new F8("2147483647", -3612);
        const v14 = {};
        v13.e;
        new F8();
        eval();
        return v13;
    }
    f4(this);
    f4().constructor;
    %OptimizeMaglevOnNextCall(f4);
    f4();
}
new F0(F0, F0);
