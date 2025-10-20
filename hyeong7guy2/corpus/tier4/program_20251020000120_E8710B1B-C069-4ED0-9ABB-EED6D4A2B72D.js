function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const t3 = Intl.PluralRules;
const v7 = new t3(F1, Intl);
try { v7.selectRange(F1, 1073741823); } catch (e) {}
