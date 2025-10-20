function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = F0.constructor;
    t2();
}
function f7() {
    with (d8) {
        const v10 = test.FastCAPI;
        const v11 = new v10(v10, d8, d8, d8, d8);
        try { v11.throw_no_fallback(f7, test, v11, d8); } catch (e) {}
    }
    return F0;
}
F0.constructor = f7;
new F0(F0, f7, F0);
