function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    a3();
}
function f7() {
    with (d8) {
        const v10 = test.FastCAPI;
        const v11 = new v10(v10);
        v11.add_32bit_int(2);
    }
    return 2;
}
new F1(f7);
