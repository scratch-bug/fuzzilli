with (d8) {
    const v2 = test.FastCAPI;
    const v3 = new v2();
    const v4 = v3.clamp_compare_u64();
    const v5 = new v2(v4, v2, d8, d8, d8);
    v5.enforce_range_compare_i32(v4);
}
