class C0 {
}
class C1 {
}
function f2() {
    return Temporal.PlainYearMonth.from();
}
C1[Symbol.toPrimitive] = f2;
const v8 = [C1,C1];
try { new Date(v8, v8, C0, C0, C1); } catch (e) {}
