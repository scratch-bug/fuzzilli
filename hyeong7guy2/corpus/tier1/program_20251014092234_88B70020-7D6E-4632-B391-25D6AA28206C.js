function f1() {
    return f1;
}
const v2 = class extends f1 {
    static {
        function f4(a5, a6, a7) {
            try {
                a5++;
                function F9(a11, a12) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                new F9();
                Symbol.valueOf(v2);
            } catch(e15) {
            }
            return f4;
        }
        f4(this);
        f4(f4, Symbol, Symbol);
        %OptimizeMaglevOnNextCall(f4);
        f4(this, f4, f4);
    }
}
