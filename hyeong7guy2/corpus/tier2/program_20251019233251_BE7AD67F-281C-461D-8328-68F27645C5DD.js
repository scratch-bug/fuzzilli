function f0() {
    function f1(a2, a3) {
        with (d8) {
            const v6 = test.FastCAPI;
            const v7 = new v6(v6, v6, f1);
            const v8 = v7.sum_uint64_as_number;
            try { v8.apply(v8, d8); } catch (e) {}
        }
        return f0;
    }
    const v10 = f1();
    f1();
    %OptimizeMaglevOnNextCall(f1);
    f1(v10, v10);
    return v10;
}
({ construct: f0 }).construct();
