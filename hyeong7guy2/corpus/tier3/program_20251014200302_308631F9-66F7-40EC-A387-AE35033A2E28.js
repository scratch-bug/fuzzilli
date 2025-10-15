function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function f2(a3, a4) {
    const t4 = Intl.NumberFormat;
    const v7 = t4();
    const v8 = v7.formatRange;
    try { v8(a4, a3); } catch (e) {}
    return v7;
}
F0.constructor = f2;
const v10 = F0.constructor;
v10(v10, F0, v10, f2, v10);
