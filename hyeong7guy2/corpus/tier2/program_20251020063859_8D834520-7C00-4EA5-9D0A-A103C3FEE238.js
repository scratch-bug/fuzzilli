function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    with (d8) {
        const t3 = test.FastCAPI;
        const v7 = new t3();
        try { v7.sum_int64_as_bigint(test, a3); } catch (e) {}
    }
}
new F0(F0, F0);
