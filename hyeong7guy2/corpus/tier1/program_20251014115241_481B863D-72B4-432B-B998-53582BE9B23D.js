const v0 = class {
    static {
        function F2(a4, a5) {
            if (!new.target) { throw 'must be called with new'; }
            function f6() {
                function f7(a8) {
                    eval();
                }
                f7(f7);
                f7();
                %OptimizeMaglevOnNextCall(f7);
                return f7;
            }
            Object.defineProperty(this, "toString", { get: f6 });
        }
        const v13 = new F2();
        class C14 {
            static [v13](a16, a17, a18) {
            }
        }
    }
}
