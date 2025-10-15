function f1() {
    return f1;
}
const v2 = class extends f1 {
    static {
        function f4(a5, a6, a7) {
            try {
                delete Symbol[1073741823];
            } catch(e10) {
            }
            return a7;
        }
        f4(this, f1, f1);
        f4();
        %OptimizeMaglevOnNextCall(f4);
        f4();
    }
}
