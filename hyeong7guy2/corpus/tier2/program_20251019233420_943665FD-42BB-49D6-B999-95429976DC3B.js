const v1 = 536870889n << 536870889n;
function f2() {
    const t2 = Temporal.ZonedDateTime;
    new t2(v1);
    return 536870889n;
}
const v6 = f2.prototype;
try { v6.constructor(); } catch (e) {}
