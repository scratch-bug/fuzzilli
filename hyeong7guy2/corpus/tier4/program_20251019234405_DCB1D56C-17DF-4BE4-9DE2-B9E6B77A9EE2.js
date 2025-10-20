function f3(a4) {
    return "join";
}
function f5(a6) {
    return "join";
}
f3[Symbol.toPrimitive] = f5;
function f9() {
    return "object";
}
function F10() {
    if (!new.target) { throw 'must be called with new'; }
}
Object.defineProperty(F10, "region", { writable: true, enumerable: true, value: 135 });
class C12 extends F10 {
}
C12.firstDayOfWeek = f3;
const v14 = Intl.Locale;
v14[Symbol.toPrimitive] = f9;
new v14(v14, C12);
