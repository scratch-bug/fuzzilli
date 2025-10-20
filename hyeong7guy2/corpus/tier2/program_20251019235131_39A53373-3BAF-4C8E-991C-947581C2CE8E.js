function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function F4(a6, a7, a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        function F10(a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            function f14() {
                function f15(a16) {
                    function f17() {
                        ("🙌🏿").constructor.fromCharCode(f17, this);
                        return f14;
                    }
                    ({ construct: f17 }).construct();
                    return a2;
                }
                f15(a13);
                f15(a12);
                %OptimizeMaglevOnNextCall(f15);
                return f15;
            }
            Object.defineProperty(this, "toString", { get: f14 });
        }
        const v25 = new F10();
        class C26 {
            static [v25](a28, a29, a30) {
            }
        }
    }
    new F4(a3, a3, a2, F0);
}
new F0();
