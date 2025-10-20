with (d8) {
    const v3 = test.FastCAPI;
    const v4 = new v3(v3, -9007199254740992, test, d8);
    try { v4.enforce_range_compare_u32(-9007199254740992); } catch (e) {}
}
