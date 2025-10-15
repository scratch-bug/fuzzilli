function f1() {
    return f1;
}
const v2 = class extends f1 {
    static {
        function f4(a5, a6, a7) {
            try {
                Symbol.valueOf(v2);
            } catch(e9) {
                function F10(a12, a13) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                F10.d >>>= 100000;
            }
            return Symbol;
        }
        f4(f1, f1, f4());
        %OptimizeMaglevOnNextCall(f4);
        f4();
    }
}
