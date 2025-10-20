function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            class C10 {
                [Array];
                static ["-4294967297"](a12) {
                }
            }
            const v13 = class {
                static [128](a15, a16, a17, a18) {
                }
            }
            return a7;
        }
        f6();
        f6(F1);
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v21 = new F1();
class C22 {
    static [v21](a24, a25, a26) {
    }
}
