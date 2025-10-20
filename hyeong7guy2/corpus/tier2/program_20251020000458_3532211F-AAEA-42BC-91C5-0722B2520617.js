function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function f8() {
                return this;
            }
            const v9 = class extends f8 {
                static {
                    function f11(a12, a13, a14) {
                        try {
                            g = 9007199254740991;
                        } catch(e16) {
                        }
                        return f11;
                    }
                    const v17 = f11();
                    v17();
                    %OptimizeMaglevOnNextCall(f11);
                    f11(this, v17, f4);
                }
            }
            eval();
            return 9007199254740991;
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v22 = new F0(F0, F0);
class C23 {
    static [v22](a25, a26, a27) {
    }
}
