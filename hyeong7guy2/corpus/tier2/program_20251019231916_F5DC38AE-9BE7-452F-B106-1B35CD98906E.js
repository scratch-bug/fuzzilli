let v0 = 3;
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            function f8(a9, a10) {
                a7 & a7;
                return f8;
            }
            function F12() {
                if (!new.target) { throw 'must be called with new'; }
            }
            [v0,F12,,...F12] = [91434555,-3,268435439,-2147483649,9,-13,268435441,-4096,-65535,1000];
            f8();
        }
        f6(f6());
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v18 = new F1(v0, F1);
class C19 {
    static [v18](a21, a22, a23) {
    }
}
