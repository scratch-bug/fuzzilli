function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v7 = [-1.3627030661649108e+307,680473.7032090442,257.625992409535,-0.895760134841046,0.19987537436654312];
            class C8 {
                static [v7](a10) {
                }
            }
            function F12(a14, a15) {
                if (!new.target) { throw 'must be called with new'; }
            }
            try { F12.__proto__ = F12; } catch (e) {}
            function f16(a17) {
                return a17;
            }
            const v18 = class extends f16 {
                static ["NFD"](a20, a21, a22, a23) {
                }
            }
            f5[4] | 7;
        }
        f5();
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v29 = new F0();
class C30 {
    static [v29](a32, a33, a34) {
    }
}
