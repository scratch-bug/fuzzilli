const v1 = /Ra\S(\1a)/du;
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            v1.dotAll += -65535;
            return a4;
        }
        f7(F2);
        f7();
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v11 = new F2(-65535, F2);
class C12 {
    static [v11](a14, a15, a16) {
    }
}
