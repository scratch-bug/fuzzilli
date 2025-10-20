function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    function f10() {
        function f11(a12) {
            function f13(a14, a15, a16) {
                a12[458] = f10;
                return F2;
            }
            let v17;
            try { v17 = f13(); } catch (e) {}
            return typeof v17 === "boolean";
        }
        f11(F0);
        f11();
        %OptimizeMaglevOnNextCall(f11);
        return f11;
    }
    Object.defineProperty(this, "toString", { get: f10 });
}
const v23 = new F6(F0, F6);
class C24 {
    static [v23](a26, a27, a28) {
    }
}
