let v0 = 135;
v0++;
function f4() {
    return "object";
}
function F5() {
    if (!new.target) { throw 'must be called with new'; }
}
Object.defineProperty(F5, "region", { writable: true, enumerable: true, value: v0 });
class C7 extends F5 {
}
const v9 = Intl.Locale;
v9[Symbol.toPrimitive] = f4;
const v11 = new v9(v9, C7);
v11.minimize(Symbol, Intl, "object", v0, "object");
