class C0 {
}
class C1 {
}
C1.calendar = C0;
function f2() {
    return f2;
}
f2.relativeTo = C1;
const t9 = Temporal.Duration;
const v5 = new t9();
try { v5.total(f2); } catch (e) {}
