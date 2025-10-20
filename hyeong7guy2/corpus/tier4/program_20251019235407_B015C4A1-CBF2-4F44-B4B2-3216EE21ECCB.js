class C2 extends Float64Array {
}
function f5(a6) {
    return a6;
}
function f7(a8) {
    return "join";
}
f5[Symbol.toPrimitive] = f7;
function f11() {
    return "object";
}
function F12() {
    if (!new.target) { throw 'must be called with new'; }
}
F12.calendar = 129n;
F12.numeric = C2;
class C14 extends F12 {
}
C14.firstDayOfWeek = f5;
const v16 = Intl.Locale;
v16[Symbol.toPrimitive] = f11;
new v16(v16, C14);
