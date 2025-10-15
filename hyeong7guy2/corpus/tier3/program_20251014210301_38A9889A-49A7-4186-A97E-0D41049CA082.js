class C0 {
    static {
        function f2(a3, a4, a5) {
            try {
                C0++;
            } catch(e7) {
            }
            return f2;
        }
        f2();
        %OptimizeMaglevOnNextCall(f2());
        f2(this, f2, this);
    }
}
