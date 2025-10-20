function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            (-5.593970312299569e+307)[Symbol.replace];
        }
        f6(f6(f6));
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v13 = new F1(F1, -5.593970312299569e+307);
class C14 {
    static [v13](a16, a17, a18) {
    }
}
