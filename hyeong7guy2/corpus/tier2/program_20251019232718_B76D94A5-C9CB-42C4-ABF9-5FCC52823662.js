function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            ("2147483647").charCodeAt(-1000000.0);
        }
        f6(F1);
        f6();
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v12 = new F1();
class C13 {
    static [v12](a15, a16, a17) {
    }
}
