function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            f6[4] | 7;
            const v12 = { a: 1.5253577300056113e+307 };
            const t5 = ("2147483647").constructor;
            t5(Symbol);
            this.a >>> v12;
            return "2147483647";
        }
        f6();
        f6();
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v20 = new F1(Symbol, Symbol);
class C21 {
    static [v20](a23, a24, a25) {
    }
}
