function f1() {
    return 16;
}
function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
F2.valueOf = f1;
function f7(a8) {
    const v10 = Intl.PluralRules;
    const v12 = {};
    v12.roundingIncrement = F2;
    const v13 = new v10("tn", v12);
    return v13;
}
try { f7.call(); } catch (e) {}
