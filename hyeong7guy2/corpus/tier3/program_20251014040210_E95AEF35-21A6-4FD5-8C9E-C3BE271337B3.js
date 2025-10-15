class C0 {
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6) {
        return C0;
    }
    a4[Symbol.toPrimitive] = f5;
    const t8 = Intl.RelativeTimeFormat;
    const v11 = new t8(a3, this);
    try { v11.format(a4); } catch (e) {}
}
new F1(C0, C0);
