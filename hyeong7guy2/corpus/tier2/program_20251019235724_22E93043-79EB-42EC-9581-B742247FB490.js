class C0 {
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            function f15() {
                return f15;
            }
            function f16(a17) {
                function f19(a20, a21, a22) {
                    return { [Math]: a17 };
                }
                f19();
                f19();
                f19();
                f19();
                f19();
                f19();
                const v32 = new Uint8ClampedArray(956);
                function F33(a35, a36) {
                    if (!new.target) { throw 'must be called with new'; }
                    function f37() {
                        function f38(a39) {
                            v32[10] /= a39;
                        }
                        f38(f38);
                        %OptimizeMaglevOnNextCall(f38);
                        return f38;
                    }
                    Object.defineProperty(this, "toString", { get: f37 });
                }
                const v41 = new F33();
                v41["toString"]();
                const v44 = new F33(a7, v41);
                class C45 {
                    static [v44](a47, a48, a49) {
                    }
                }
                f19();
                return this;
            }
            Object.defineProperty(this, "e", { get: f15, set: f16 });
            this.e = C0;
        }
        new F9();
        return a7;
    }
    f5(a3, a4, this);
    %OptimizeFunctionOnNextCall(f5);
}
new F1();
new F1();
new F1();
