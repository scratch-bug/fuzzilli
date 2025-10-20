function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    a4.apply(this);
}
function f7() {
    with (d8) {
        const t6 = test.FastCAPI;
        const v11 = new t6(F1, d8);
        v11.call_to_number(5.0);
    }
    return d8;
}
new F1(F1, f7);
