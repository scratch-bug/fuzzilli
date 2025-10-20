function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function F4(a6, a7, a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        function F10(a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            function f14() {
                function f15(a16) {
                    function f17() {
                        return ("🙌🏿").constructor.fromCharCode(f17);
                    }
                    const v21 = { construct: f17 };
                    v21.construct(v21, a13, a7, v21, a13);
                }
                f15(f15(a13));
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
    new F4(F0, F0, this, a2);
}
const v32 = new F0();
new F0(F0, v32);
