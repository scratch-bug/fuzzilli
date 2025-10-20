function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    a3.constructor();
}
function f6() {
    with (d8) {
        const v10 = test.FastCAPI.prototype;
        try { v10.add_all_no_options(); } catch (e) {}
    }
    return d8;
}
F0.constructor = f6;
new F0(F0, F0);
