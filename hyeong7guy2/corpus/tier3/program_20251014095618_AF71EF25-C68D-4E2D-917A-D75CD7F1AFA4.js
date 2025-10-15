function f1() {
    return f1;
}
const v2 = class extends f1 {
    static {
        function f4(a5, a6, a7) {
            try {
                const v9 = delete Symbol[1073741823];
                v9 || v9;
            } catch(e11) {
            }
            return a5;
        }
        f4();
        const v13 = f4();
        %OptimizeMaglevOnNextCall(f4);
        f4(f4, v13, Symbol);
    }
}
