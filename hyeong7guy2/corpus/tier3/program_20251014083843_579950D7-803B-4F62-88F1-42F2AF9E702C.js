class C0 {
}
class C1 {
}
class C2 extends C0 {
}
const t6 = Intl.NumberFormat;
const v5 = t6();
try { v5.formatRange(C1, C2); } catch (e) {}
