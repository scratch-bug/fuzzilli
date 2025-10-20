const v2 = new Float64Array(1024);
function F3(a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    const t3 = F3.constructor;
    t3();
}
function f10() {
    with (d8) {
        const t8 = test.FastCAPI;
        const v14 = new t8(d8);
        v14.add_all_uint32_typed_array(v2);
    }
    return F3;
}
F3.constructor = f10;
new F3();
