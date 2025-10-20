function f0() {
    function f1(a2, a3) {
        with (d8) {
            const t3 = test.FastCAPI;
            const v7 = new t3();
            const v8 = v7.sum_uint64_as_number;
            try { v8(); } catch (e) {}
        }
        return f1;
    }
    f1();
    f1();
    %OptimizeMaglevOnNextCall(f1);
    f1();
    return f1;
}
({ construct: f0 }).construct();
