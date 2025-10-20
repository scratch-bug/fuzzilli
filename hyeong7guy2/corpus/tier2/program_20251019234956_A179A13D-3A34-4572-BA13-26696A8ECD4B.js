function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            function f8() {
                return Symbol;
            }
            Math.log2(f8);
            return f8[Symbol.replace];
        }
        f6(f6);
        f6(f6);
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v15 = new F1(Symbol, Symbol);
class C16 {
    static [v15](a18, a19, a20) {
    }
}
