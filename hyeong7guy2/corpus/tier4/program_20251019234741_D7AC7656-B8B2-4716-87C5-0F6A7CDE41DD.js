const v0 = [];
function f1() {
    return "-00:00";
}
v0[Symbol.toPrimitive] = f1;
function f5(a6) {
    return Symbol;
}
const v7 = f5.constructor;
try { v7(v0); } catch (e) {}
