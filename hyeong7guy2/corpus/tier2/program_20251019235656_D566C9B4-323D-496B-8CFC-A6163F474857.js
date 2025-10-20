class C0 {
}
function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const t4 = F1.constructor;
    t4(a4, a3);
}
function f8() {
    with (d8) {
        const t9 = test.FastCAPI;
        const v12 = new t9();
        v12.enforce_range_compare_u64(test, C0);
    }
    return f8;
}
F1.constructor = f8;
new F1();
