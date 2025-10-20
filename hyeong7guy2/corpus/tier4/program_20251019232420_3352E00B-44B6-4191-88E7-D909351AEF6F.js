class C1 {
}
C1.offset = -29016n;
function f2() {
    return -29016n;
}
f2.relativeTo = C1;
const t7 = Temporal.Duration;
const v5 = new t7();
try { v5.total(f2); } catch (e) {}
