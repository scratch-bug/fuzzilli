function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    try { new a5(F3); } catch (e) {}
    function f8(a9) {
        const v11 = new Uint32Array();
        const v13 = !v11.length;
        v13 && v13;
        return -2.220446049250313e-16;
    }
    f8();
}
new F3(F3);
