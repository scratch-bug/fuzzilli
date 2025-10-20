function f0() {
    const v3 = Symbol.dispose;
    const v5 = {
        [v3]() {
        },
    };
    using v6 = v5;
    with (d8) {
        const t8 = test.FastCAPI;
        const v9 = new t8();
        v9.enforce_range_compare_i32(v6);
    }
    return f0;
}
f0();
