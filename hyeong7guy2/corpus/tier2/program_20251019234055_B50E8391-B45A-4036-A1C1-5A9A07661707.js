function f2() {
    return "object";
}
function F3() {
    if (!new.target) { throw 'must be called with new'; }
}
F3[Symbol.toPrimitive] = f2;
class C6 extends F3 {
}
Object.defineProperty(C6, "language", { configurable: true, value: F3 });
const v8 = Intl.Locale;
v8[Symbol.toPrimitive] = f2;
new v8(v8, C6);
