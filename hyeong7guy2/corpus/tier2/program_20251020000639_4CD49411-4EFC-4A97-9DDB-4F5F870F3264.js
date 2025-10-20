function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = F1.constructor;
    v6(9007199254740990, v6, 9007199254740990);
}
function f8() {
    with (d8) {
        const t7 = test.FastCAPI;
        const v12 = new t7();
        v12.add_all_5args_enforce_range(9007199254740990);
    }
    return F1;
}
F1.constructor = f8;
new F1();
