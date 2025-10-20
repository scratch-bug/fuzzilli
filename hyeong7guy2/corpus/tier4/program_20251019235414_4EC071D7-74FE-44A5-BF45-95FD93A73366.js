class C1 extends Float32Array {
}
function f4() {
    return "object";
}
function F5() {
    if (!new.target) { throw 'must be called with new'; }
}
F5.caseFirst = C1;
class C7 extends F5 {
}
const v9 = Intl.Locale;
v9[Symbol.toPrimitive] = f4;
try { new v9(v9, C7); } catch (e) {}
