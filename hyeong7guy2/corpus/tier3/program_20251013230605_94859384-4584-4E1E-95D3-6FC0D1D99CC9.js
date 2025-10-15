const t0 = Intl.Segmenter;
const v2 = new t0();
v2.resolvedOptions();
class C4 {
}
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    const v9 = this.constructor;
    try { new v9(); } catch (e) {}
    this.f = C4;
}
new F5();
class C12 extends F5 {
}
const v13 = new C12();
const t15 = v13.constructor;
new t15();
