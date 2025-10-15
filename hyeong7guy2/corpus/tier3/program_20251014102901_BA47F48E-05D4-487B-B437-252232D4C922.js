function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
class C2 extends F0 {
}
const v4 = Intl.Locale;
try { new v4(v4, C2); } catch (e) {}
