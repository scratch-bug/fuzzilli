function f3() {
    return "object";
}
function F4() {
    if (!new.target) { throw 'must be called with new'; }
}
class C6 extends F4 {
}
function f7() {
    return "join";
}
Object.defineProperty(C6, "script", { get: f7 });
const v9 = Intl.Locale;
v9[Symbol.toPrimitive] = f3;
const v11 = new v9(v9, C6);
v11.script;
