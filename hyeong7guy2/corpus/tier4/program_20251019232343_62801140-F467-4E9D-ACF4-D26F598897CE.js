class C0 {
}
function f1(a2) {
    Intl.localeMatcher = Intl;
    const t4 = Intl.DisplayNames;
    new t4(Intl, Intl);
    return Intl;
}
C0.constructor = f1;
const v6 = C0.constructor;
try { v6(); } catch (e) {}
