function f0() {
    function f1(a2, a3) {
        with (d8) {
            const v6 = test.FastCAPI;
            const v7 = new v6(a2, f1, v6, v6);
            const v8 = v7.sum_uint64_as_number;
            try { v8.apply(v8); } catch (e) {}
        }
        return f0;
    }
    f1(f0, f1);
    const v11 = f1(f0, f0);
    %OptimizeMaglevOnNextCall(f1);
    f1(v11, f1);
    return f0;
}
({ construct: f0 }).construct();
