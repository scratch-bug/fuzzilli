function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    with (d8) {
        const v7 = test.FastCAPI;
        const v8 = new v7();
        v8.enforce_range_compare_u32(v7, 1318203949);
    }
}
new F1();
