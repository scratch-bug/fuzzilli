function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function f2(a3, a4) {
    const v6 = Intl.NumberFormat;
    v6("cgg");
    return v6;
}
F0.constructor = f2;
const t9 = F0.constructor;
t9();
