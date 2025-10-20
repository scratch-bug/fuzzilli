function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
function f5() {
    return "object";
}
function F6() {
    if (!new.target) { throw 'must be called with new'; }
}
class C8 extends F6 {
}
C8.collation = v2;
const v10 = Intl.Locale;
v10[Symbol.toPrimitive] = f5;
try { new v10(v10, C8); } catch (e) {}
