with (d8) {
    const v2 = test.FastCAPI;
    const v3 = v2 != v2;
    const v4 = new v2();
    v4.clamp_compare_i32(v3);
}
