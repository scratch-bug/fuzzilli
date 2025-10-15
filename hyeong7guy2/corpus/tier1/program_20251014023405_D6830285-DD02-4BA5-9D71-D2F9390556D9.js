class C1 extends WeakMap {
}
function f2() {
    const v4 = Temporal.PlainDateTime;
    const v10 = {
        hour: 15,
        microsecond: 875,
        minute: 7,
        month: 14,
        nanosecond: 905,
    };
    v4.from(v10);
    return 875;
}
C1.constructor = f2;
const v12 = C1.constructor;
try { v12(C1, v12, WeakMap, C1); } catch (e) {}
