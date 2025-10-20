for (let i2 = 0, i3 = 10; i3; i3--) {
}
function f12() {
    return "object";
}
function F13() {
    if (!new.target) { throw 'must be called with new'; }
}
class C15 extends F13 {
}
C15.firstDayOfWeek = "2";
const v17 = Intl.Locale;
v17[Symbol.toPrimitive] = f12;
new v17(v17, C15);
