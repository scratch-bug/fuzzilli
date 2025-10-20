function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    a3.call(a2, a4, a2, this, a2);
}
function f6() {
    with (d8) {
        const t6 = test.FastCAPI;
        const v10 = new t6(test, test, d8, d8, f6);
        try { v10.sum_int64_as_number(d8, v10, d8, f6); } catch (e) {}
    }
    return d8;
}
new F0(f6, f6);
