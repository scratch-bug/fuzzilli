class C1 extends Float64Array {
}
function f4() {
    return "object";
}
function F5() {
    if (!new.target) { throw 'must be called with new'; }
}
F5.numeric = C1;
class C7 extends F5 {
}
const v9 = Intl.Locale;
v9[Symbol.toPrimitive] = f4;
const v11 = new v9(v9, C7);
v11.numeric;
