class C1 {
}
C1.second = Date;
function f2() {
    return Date;
}
f2.relativeTo = C1;
const t7 = Temporal.Duration;
const v5 = new t7();
try { v5.total(f2); } catch (e) {}
