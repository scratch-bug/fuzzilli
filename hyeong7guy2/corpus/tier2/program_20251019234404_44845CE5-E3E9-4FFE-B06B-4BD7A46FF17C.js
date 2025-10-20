function f4() {
    return "object";
}
function F5() {
    if (!new.target) { throw 'must be called with new'; }
}
Object.defineProperty(F5, "region", { writable: true, enumerable: true, value: 135 });
class C7 extends F5 {
}
function f8() {
    return "join";
}
Object.defineProperty(C7, "script", { get: f8 });
const v10 = Intl.Locale;
v10[Symbol.toPrimitive] = f4;
const v12 = new v10(v10, C7);
v12.maximize();
