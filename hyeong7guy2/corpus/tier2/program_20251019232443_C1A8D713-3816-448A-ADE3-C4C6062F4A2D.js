function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function F5(a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
        function f9() {
            function f10(a11) {
                const v13 = new Int16Array();
                const v14 = v13.length;
                const v15 = [1024,257,1073741825,10,2147483649,27668,9223372036854775807,10,268435456,-624873012];
                function f16() {
                    return v15["pop"]();
                }
                v14 - v14;
            }
            f10();
            f10(F5);
            %OptimizeMaglevOnNextCall(f10);
            return f10;
        }
        Object.defineProperty(this, "toString", { get: f9 });
    }
    const v22 = new F5();
    class C23 {
        static [v22](a25, a26, a27) {
        }
    }
}
new F1();
