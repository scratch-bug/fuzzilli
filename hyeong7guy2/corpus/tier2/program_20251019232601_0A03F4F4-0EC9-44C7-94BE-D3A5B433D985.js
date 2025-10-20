function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = [F0];
function f6(a7) {
    a7 === a7;
    return f6;
}
const v9 = f6();
function F10(a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    function f14() {
        function f15(a16) {
            const v17 = f15[4];
            v5.forEach(v9);
            v17 | 7;
            return a12;
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
