function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    a4.apply();
}
function f7() {
    with (d8) {
        const v10 = test.FastCAPI;
        const v11 = new v10(v10, d8, -9.769969358958466e+307, -9.769969358958466e+307, d8);
        v11.call_to_number(-9.769969358958466e+307);
    }
    return F1;
}
new F1(F1, f7);
