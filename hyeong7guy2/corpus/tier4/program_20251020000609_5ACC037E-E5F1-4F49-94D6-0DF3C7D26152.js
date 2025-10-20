function f1(a2) {
    with (d8) {
        const v5 = test.FastCAPI;
        const v6 = new v5(a2, -6.26014997525394e+307, v5, test, f1);
        v6.enforce_range_compare_i64(-6.26014997525394e+307);
    }
    return a2;
}
try { f1(); } catch (e) {}
