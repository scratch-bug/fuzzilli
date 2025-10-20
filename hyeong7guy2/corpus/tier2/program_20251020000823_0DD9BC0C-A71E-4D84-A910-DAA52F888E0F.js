function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = F0.constructor;
    t2();
}
function f7() {
    with (d8) {
        const v10 = test.FastCAPI;
        const v11 = new v10(d8, d8, f7, f7, v10);
        v11.enforce_range_compare_u64(test);
    }
    return F0;
}
F0.constructor = f7;
new F0();
