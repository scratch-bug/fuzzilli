function f2(a3) {
    return a3;
}
function f4(a5) {
    return "join";
}
f2[Symbol.toPrimitive] = f4;
function f8() {
    return "object";
}
function F9() {
    if (!new.target) { throw 'must be called with new'; }
}
class C11 extends F9 {
}
C11.firstDayOfWeek = f2;
const v13 = Intl.Locale;
v13[Symbol.toPrimitive] = f8;
const v15 = new v13(v13, C11);
v15.firstDayOfWeek;
