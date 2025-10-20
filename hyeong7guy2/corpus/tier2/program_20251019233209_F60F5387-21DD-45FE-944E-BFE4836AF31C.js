function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    F0.constructor.call();
}
function f7() {
    with (d8) {
        const t6 = test.FastCAPI;
        const v11 = new t6();
        v11.reset_counts();
    }
    return f7;
}
F0.constructor = f7;
new F0(F0, F0, f7);
