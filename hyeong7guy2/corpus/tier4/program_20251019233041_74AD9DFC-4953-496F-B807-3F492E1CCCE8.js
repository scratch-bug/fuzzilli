with (d8) {
    const v3 = test.FastCAPI;
    const v4 = new v3(v3, v3, 127, 127, d8);
    v4.enforce_range_compare_u32(127);
}
