with (d8) {
    const v3 = test.FastCAPI;
    const v4 = new v3(-1, test, v3);
    try { v4.enforce_range_compare_u64(-1); } catch (e) {}
}
