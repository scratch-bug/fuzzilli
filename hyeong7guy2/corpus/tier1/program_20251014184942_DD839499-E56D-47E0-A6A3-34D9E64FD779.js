function f0() {
    return f0;
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            f0();
            eval();
            return a7;
        }
        f6(f5);
        f6(f0);
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v13 = new F1(f0, F1);
class C14 {
    static [v13](a16, a17, a18) {
    }
}
