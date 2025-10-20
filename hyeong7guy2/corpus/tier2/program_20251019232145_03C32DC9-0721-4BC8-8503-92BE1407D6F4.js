function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = F1.constructor;
    t2();
}
function f8() {
    with (d8) {
        const t7 = test.FastCAPI;
        const v12 = new t7(test, d8);
        v12.add_all_no_options(Int16Array);
    }
    return d8;
}
F1.constructor = f8;
new F1();
