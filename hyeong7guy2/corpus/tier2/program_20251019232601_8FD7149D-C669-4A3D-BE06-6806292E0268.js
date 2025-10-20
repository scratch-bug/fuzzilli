const v0 = [];
function f1(a2) {
    function F3(a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        a2[1100016912];
    }
    new F3(F3, F3);
    return f1;
}
const v9 = f1(v0);
function F10(a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    function f14() {
        function f15(a16) {
            const v17 = f15[4];
            v0.forEach(v9);
            v17 | 7;
        }
        f15.call();
        f15();
        %OptimizeMaglevOnNextCall(f15);
        return f15;
    }
    Object.defineProperty(this, "toString", { get: f14 });
}
const v23 = new F10();
class C24 {
    static [v23](a26, a27, a28) {
    }
}
