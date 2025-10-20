function f3() {
    return "object";
}
function F4() {
    if (!new.target) { throw 'must be called with new'; }
}
Object.defineProperty(F4, "region", { writable: true, enumerable: true, value: 135 });
class C6 extends F4 {
}
const v8 = Intl.Locale;
v8[Symbol.toPrimitive] = f3;
const v10 = new v8(v8, C6);
v10.region;
