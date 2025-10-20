function f0() {
    function f1(a2, a3) {
        with (d8) {
            const v6 = test.FastCAPI;
            const v7 = new v6(d8, v6, f1, f0, v6);
            v7.enforce_range_compare_u32(v6, v7);
        }
        return a2;
    }
    const v9 = f1();
    const v10 = f1();
    %OptimizeMaglevOnNextCall(f1);
    f1(v9, f0);
    return v10;
}
({ construct: f0 }).construct(f0, f0);
