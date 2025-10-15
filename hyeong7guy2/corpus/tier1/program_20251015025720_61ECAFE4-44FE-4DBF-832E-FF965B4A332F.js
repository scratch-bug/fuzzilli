function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5) {
        function F8(a10, a11) {
            if (!new.target) { throw 'must be called with new'; }
            a11++;
            this.e = a11;
        }
        const v13 = new F8("2147483647", -3612);
        const v16 = {};
        function f19() {
            Date(WeakSet, Date, 882, Int16Array, v16);
            return f4;
        }
        v13.e;
        const v22 = new F8();
        return v22;
    }
    f4();
    f4();
    %OptimizeMaglevOnNextCall(f4);
    f4(a2);
}
new F0();
