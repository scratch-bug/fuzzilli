const v1 = new Uint16Array();
function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = F2.constructor;
    v7(this, v7, a6, Uint16Array, a4);
}
function f9() {
    with (d8) {
        const t8 = test.FastCAPI;
        const v13 = new t8();
        try { v13.add_all_uint64_typed_array(v1); } catch (e) {}
    }
    return d8;
}
F2.constructor = f9;
new F2();
