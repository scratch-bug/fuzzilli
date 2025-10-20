function f2() {
    return "object";
}
function F3() {
    if (!new.target) { throw 'must be called with new'; }
}
Object.defineProperty(F3, "region", { writable: true, enumerable: true, value: 135 });
class C5 extends F3 {
}
const v7 = Intl.Locale;
v7[Symbol.toPrimitive] = f2;
const v10 = new v7(v7, C5);
v10.textInfo;
