function f1() {
    const t1 = Temporal.Duration;
    const v4 = new t1();
    v4.largestUnit = Temporal;
    try { v4.round(v4); } catch (e) {}
    return Temporal;
}
ArrayBuffer.valueOf = f1;
new ArrayBuffer(ArrayBuffer);
