let v0 = 3;
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            function F8() {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v10 = [91434555,-3,268435439,-2147483649,9,-13,268435441,-4096,-65535,1000];
            function F11() {
                if (!new.target) { throw 'must be called with new'; }
            }
            class C13 extends F11 {
                static set a(a15) {
                    v10();
                }
            }
            [v0,F8,,...F8] = v10;
            a7 & a7;
        }
        f6(v0);
        f6();
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v20 = new F1(v0, v0);
class C21 {
    static [v20](a23, a24, a25) {
    }
}
