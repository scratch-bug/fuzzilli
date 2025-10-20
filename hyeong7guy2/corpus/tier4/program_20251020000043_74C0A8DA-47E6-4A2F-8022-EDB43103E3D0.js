function f3() {
    return "object";
}
function F4() {
    if (!new.target) { throw 'must be called with new'; }
}
class C6 extends F4 {
}
C6.firstDayOfWeek = 65537;
const v8 = Intl.Locale;
v8[Symbol.toPrimitive] = f3;
new v8(v8, C6);
