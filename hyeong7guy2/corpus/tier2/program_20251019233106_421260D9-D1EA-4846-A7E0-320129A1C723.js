function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = F1.constructor;
    t2();
}
function f8() {
    with (d8) {
        const v11 = test.FastCAPI;
        const v12 = new v11();
        v12.clamp_compare_u64("b");
        const v14 = new v11(d8);
        v14.is_fast_c_api_object(v12);
    }
    return d8;
}
F1.constructor = f8;
new F1();
