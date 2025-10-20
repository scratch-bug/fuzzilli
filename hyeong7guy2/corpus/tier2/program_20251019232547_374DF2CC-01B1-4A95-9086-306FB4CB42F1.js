const v0 = {};
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            let v9;
            try { v9 = a7["p"](); } catch (e) {}
            return v0 <= v9;
        }
        f6(f6);
        f6(F1);
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v13 = new F1(F1, v0);
class C14 {
    static [v13](a16, a17, a18) {
    }
}
