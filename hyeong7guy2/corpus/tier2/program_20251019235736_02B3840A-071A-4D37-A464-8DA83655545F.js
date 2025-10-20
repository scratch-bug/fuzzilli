function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function F5(a7, a8, a9, a10) {
        if (!new.target) { throw 'must be called with new'; }
        function F11(a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            function f15() {
                function f16(a17) {
                    function f18() {
                        ("🙌🏿").constructor.fromCharCode(-3.0);
                        return a7;
                    }
                    ({ construct: f18 }).construct(a7, a13);
                    return a4;
                }
                f16();
                f16(f16);
                %OptimizeMaglevOnNextCall(f16);
                return f16;
            }
            Object.defineProperty(this, "toString", { get: f15 });
        }
        const v26 = new F11(F1, a4);
        class C27 {
            static [v26](a29, a30, a31) {
            }
        }
    }
    new F5(a4, F5, F1, F1);
}
new F1();
