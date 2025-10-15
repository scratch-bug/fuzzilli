const v0 = [536870889,-32970,9223372036854775807,-15];
function f2() {
    const t2 = Temporal.Duration;
    const v5 = new t2();
    v5.smallestUnit = v0;
    try { v5.round(v5); } catch (e) {}
    return f2;
}
ArrayBuffer.valueOf = f2;
new ArrayBuffer(ArrayBuffer);
