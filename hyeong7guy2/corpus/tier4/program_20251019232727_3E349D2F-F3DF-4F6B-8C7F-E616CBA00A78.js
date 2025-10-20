class C1 {
}
C1.offset = 43051;
function f2() {
    return 43051;
}
f2.relativeTo = C1;
const t7 = Temporal.Duration;
const v5 = new t7(43051);
try { v5.total(f2); } catch (e) {}
