class C2 {
}
function f3() {
    const t3 = Temporal.PlainTime;
    new t3(1293);
    return C2;
}
C2[Symbol.toPrimitive] = f3;
try { new Date(C2); } catch (e) {}
