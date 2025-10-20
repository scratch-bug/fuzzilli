function f3() {
    return "object";
}
function F4() {
    if (!new.target) { throw 'must be called with new'; }
}
class C6 extends F4 {
}
Object.defineProperty(C6, "firstDayOfWeek", { writable: true, enumerable: true, value: 4n });
const v8 = Intl.Locale;
v8[Symbol.toPrimitive] = f3;
new v8(v8, C6);
