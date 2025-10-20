function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = F0.constructor;
    t2();
}
function f7() {
    with (d8) {
        const t7 = test.FastCAPI;
        const v11 = new t7();
        v11.get_null_pointer(F0, d8, f7, v11);
    }
    return f7;
}
F0.constructor = f7;
new F0(F0, f7, f7);
