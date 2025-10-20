function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            function f8() {
                return Symbol;
            }
            f8.bind(a7, f6, f6, a7);
            const v11 = Math.log2(f8);
            f8[Symbol.replace];
            return v11;
        }
        f6(Symbol);
        f6(f5);
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v16 = new F1(F1, F1);
class C17 {
    static [v16](a19, a20, a21) {
    }
}
