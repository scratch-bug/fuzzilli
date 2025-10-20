function f0() {
    function f1(a2, a3) {
        function f4(a5, a6, a7) {
            a5 < a5;
            return a7 >>> a7;
        }
        f4(f4());
        return f1;
    }
    const v12 = f1(f0, f0);
    const v13 = f1();
    %OptimizeMaglevOnNextCall(f1);
    f1(v13, v12);
    return f0;
}
({ construct: f0 }).construct();
