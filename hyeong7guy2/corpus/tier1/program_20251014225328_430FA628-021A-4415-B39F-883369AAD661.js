function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
let v4 = new F0(F0, F0);
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    function f9() {
        function f10(a11) {
            function F12(a14, a15) {
                if (!new.target) { throw 'must be called with new'; }
                v4++;
            }
            const v17 = new F12(v4);
            const v18 = v17.constructor;
            function f19() {
                eval(v4);
                return F5;
            }
            const v22 = new v18(F12);
            v22.constructor;
        }
        f10();
        f10();
        %OptimizeMaglevOnNextCall(f10);
        return f10;
    }
    Object.defineProperty(this, "toString", { get: f9 });
}
const v26 = new F5(v4, F5);
class C27 {
    static [v26](a29, a30, a31) {
    }
}
