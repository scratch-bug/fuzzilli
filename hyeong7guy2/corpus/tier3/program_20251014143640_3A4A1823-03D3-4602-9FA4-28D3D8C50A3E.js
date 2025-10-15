class C0 {
}
function f1() {
    return f1;
}
f1.relativeTo = C0;
const t6 = Temporal.Duration;
const v4 = new t6();
try { v4.total(f1); } catch (e) {}
