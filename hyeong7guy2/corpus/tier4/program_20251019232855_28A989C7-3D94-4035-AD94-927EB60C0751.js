function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
function f5() {
    with (d8) {
        const t5 = test.FastCAPI;
        const v9 = new t5();
        v9.overloaded_add_all_32bit_int(f5, v9, test, v9, 30830, F0, v9, 2.2250738585072014e-308);
    }
    return 2.2250738585072014e-308;
}
f5();
