function f2() {
    return "object";
}
function F3() {
    if (!new.target) { throw 'must be called with new'; }
}
class C5 extends F3 {
}
Object.defineProperty(C5, "language", { configurable: true, value: F3 });
const v7 = Intl.Locale;
v7[Symbol.toPrimitive] = f2;
try { new v7(v7, C5); } catch (e) {}
