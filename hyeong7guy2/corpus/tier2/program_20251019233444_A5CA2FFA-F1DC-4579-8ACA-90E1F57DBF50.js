function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            (f6 < "2") == 491556.7224389587;
            return a7;
        }
        f6.apply();
        f6();
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v13 = new F1(F1, "2");
class C14 {
    static [v13](a16, a17, a18) {
    }
}
