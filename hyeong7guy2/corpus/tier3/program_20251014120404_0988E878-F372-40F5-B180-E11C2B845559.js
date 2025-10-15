function f1() {
    return f1;
}
const v2 = class extends f1 {
    static {
        function f4(a5, a6, a7) {
            try {
                g = 9007199254740991;
            } catch(e9) {
            }
            return f4;
        }
        const t12 = f4();
        t12();
        %OptimizeMaglevOnNextCall(f4);
        f4();
    }
}
