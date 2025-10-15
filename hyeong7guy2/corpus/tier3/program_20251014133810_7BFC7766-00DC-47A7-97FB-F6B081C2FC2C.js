const v1 = {};
function f3() {
    return Symbol;
}
const v4 = class extends f3 {
    static {
        function f6(a7, a8, a9) {
            a9?.constructor;
            return f6;
        }
        const t10 = f6(f6, Symbol, f3);
        t10(v1, v1, 1);
        %OptimizeMaglevOnNextCall(f6);
        f6();
    }
}
