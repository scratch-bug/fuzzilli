const v0 = [1.0];
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            Array.of(v0)[0].pop(f6, a7);
            return a7;
        }
        f6(f6);
        %OptimizeMaglevOnNextCall(f6);
        a3[3] = this;
        return f6;
    }
    f5();
    a3.g ||= a3;
    Object.defineProperty(this, "toString", { get: f5 });
}
const v14 = new F1(v0);
class C15 {
    static [v14](a17, a18, a19) {
    }
}
