function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = F0.constructor;
    t2(this, F0);
}
function f7() {
    with (d8) {
        const t7 = test.FastCAPI;
        const v11 = new t7(test, test, d8, f7);
        v11.clamp_compare_u32(v11);
    }
    return f7;
}
F0.constructor = f7;
new F0(f7, f7, f7);
