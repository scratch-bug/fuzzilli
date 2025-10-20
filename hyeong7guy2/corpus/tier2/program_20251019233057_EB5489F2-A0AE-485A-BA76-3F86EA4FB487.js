function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function F4(a6, a7, a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        function F10(a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            function f14() {
                function f15(a16) {
                    const v18 = ("2147483647").constructor;
                    v18().charAt(v18);
                }
                f15();
                f15();
                %OptimizeMaglevOnNextCall(f15);
                return f15;
            }
            Object.defineProperty(this, "toString", { get: f14 });
        }
        const v23 = new F10();
        class C24 {
            static [v23](a26, a27, a28) {
            }
        }
    }
    new F4();
}
new F0(F0, F0);
new F0();
