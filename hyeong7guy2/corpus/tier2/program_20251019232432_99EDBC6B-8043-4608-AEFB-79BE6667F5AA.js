function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = [a4,a4];
    function f8(a9) {
        a9 >= a9;
        return f8;
    }
    const v11 = f8(536870888n);
    function F12(a14, a15) {
        if (!new.target) { throw 'must be called with new'; }
        function f16() {
            function f17(a18) {
                const v19 = f17[4];
                v6.forEach(v11);
                v19 | 7;
                return F0;
            }
            f17.call();
            f17.call();
            %OptimizeMaglevOnNextCall(f17);
            return f17;
        }
        Object.defineProperty(this, "toString", { get: f16 });
    }
    const v25 = new F12(a3, F0);
    const t25 = v25.toString;
    t25();
}
new F0();
