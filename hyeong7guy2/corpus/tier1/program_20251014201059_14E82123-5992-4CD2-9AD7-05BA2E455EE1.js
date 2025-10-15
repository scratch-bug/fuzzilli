class C0 {
    static {
        function F2(a4, a5) {
            if (!new.target) { throw 'must be called with new'; }
            function f6() {
                function f7(a8) {
                    function F9(a11, a12) {
                        if (!new.target) { throw 'must be called with new'; }
                    }
                    typeof F9;
                }
                f7(f7());
                %OptimizeMaglevOnNextCall(f7);
                return f7;
            }
            Object.defineProperty(this, "toString", { get: f6 });
        }
        const v16 = new F2();
        class C17 {
            static [v16](a19, a20, a21) {
            }
        }
    }
}
