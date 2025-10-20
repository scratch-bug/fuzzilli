with (d8) {
    const v2 = test.LeafInterfaceType;
    const v3 = new v2(d8, v2, v2);
    const t3 = test.FastCAPI;
    const v5 = new t3();
    v5.is_fast_c_api_object(v3);
}
