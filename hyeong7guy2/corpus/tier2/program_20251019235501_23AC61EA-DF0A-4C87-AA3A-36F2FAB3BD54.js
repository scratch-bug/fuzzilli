const v0 = class {
}
function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const t4 = F1.constructor;
    t4();
}
function f8() {
    with (d8) {
        const t9 = test.FastCAPI;
        const v12 = new t9();
        try { v12.pass_pointer(v0, test); } catch (e) {}
    }
    return d8;
}
F1.constructor = f8;
new F1(f8, v0, f8);
