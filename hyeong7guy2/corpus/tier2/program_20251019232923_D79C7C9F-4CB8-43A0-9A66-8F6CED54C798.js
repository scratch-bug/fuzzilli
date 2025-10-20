class C1 extends Float64Array {
}
function f4(a5) {
    return "object";
}
function f6(a7) {
    return "join";
}
f4[Symbol.toPrimitive] = f6;
function f10() {
    return "object";
}
function F11() {
    if (!new.target) { throw 'must be called with new'; }
}
F11.numeric = C1;
class C13 extends F11 {
}
function f14() {
    return "join";
}
Object.defineProperty(C13, "script", { get: f14 });
C13.firstDayOfWeek = f4;
const v16 = Intl.Locale;
v16[Symbol.toPrimitive] = f10;
const v18 = new v16(v16, C13);
v18.toString(v18, f6, f10, Symbol);
