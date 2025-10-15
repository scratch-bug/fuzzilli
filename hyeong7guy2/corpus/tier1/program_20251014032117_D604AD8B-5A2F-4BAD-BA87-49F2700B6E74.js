class C0 {
}
function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7, a8) {
        C0.a |= a7;
        return C0;
    }
    f4(C0, C0, C0);
    const v10 = this.constructor;
    try { new v10(); } catch (e) {}
}
new F1(F1);
