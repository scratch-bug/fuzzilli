class C1 {
}
const v2 = new C1();
const t3 = v2.constructor;
t3.sensitivity = -771919.0427564562;
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    try { new a6(C1, C1); } catch (e) {}
    const t8 = Intl.Collator;
    t8(a7, a7);
}
new F4(F4);
