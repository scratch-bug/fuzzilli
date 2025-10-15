function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            Array(555155726);
            const t4 = "2147483647";
            t4.length = a7;
            return eval();
        }
        f6(a4);
        f6(F1);
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v15 = new F1();
class C16 {
    static [v15](a18, a19, a20) {
    }
}
