function f0() {
    return f0;
}
let v1 = class extends f0 {
    static {
        function f3(a4, a5, a6) {
            try {
                v1++;
            } catch(e8) {
            }
            return f3;
        }
        const v9 = f3();
        %OptimizeMaglevOnNextCall(f3());
        f3(f3, v9, v9);
    }
}
