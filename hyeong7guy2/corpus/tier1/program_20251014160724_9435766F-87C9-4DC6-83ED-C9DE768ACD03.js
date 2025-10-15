function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            function f9() {
                for (let v11 = 0; v11 < 5; v11++) {
                    arguments["p" + v11] = v11;
                }
                return a7;
            }
            f9(129);
            const v15 = eval();
            v15 | v15;
        }
        f6();
        f6(F1);
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v19 = new F1();
class C20 {
    static [v19](a22, a23, a24) {
    }
}
