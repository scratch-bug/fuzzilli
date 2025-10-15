class C0 {
}
function f1(a2) {
    return C0;
}
const v3 = class extends C0 {
}
const t7 = Intl.NumberFormat;
const v6 = t7();
v6[Symbol.toPrimitive] = f1;
try { v6.formatRangeToParts(v3, v6); } catch (e) {}
