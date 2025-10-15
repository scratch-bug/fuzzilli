function f1() {
    return f1;
}
const v2 = class extends f1 {
    static {
        function f4(a5, a6, a7) {
            try {
                const v8 = a5++;
                v8 - v8;
                Symbol.valueOf(v2);
            } catch(e11) {
                e11.message;
            }
            return f4;
        }
        const t15 = f4(f1, Symbol, this);
        t15(f4, Symbol, f1);
        %OptimizeMaglevOnNextCall(f4);
        f4();
    }
}
