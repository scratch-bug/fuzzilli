function f3(a4) {
    return Uint8Array;
}
function f5() {
    return "string";
}
function F6() {
    if (!new.target) { throw 'must be called with new'; }
}
class C8 extends F6 {
}
C8.script = f3;
const v10 = Intl.Locale;
v10[Symbol.toPrimitive] = f5;
try { new v10(v10, C8); } catch (e) {}
