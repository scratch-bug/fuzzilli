function f1() {
    Temporal.toString = f1;
    const v3 = Temporal.Duration;
    const v4 = new v3();
    v4.largestUnit = Temporal;
    try { v4.round(v4); } catch (e) {}
    return v3;
}
ArrayBuffer.valueOf = f1;
new ArrayBuffer(ArrayBuffer);
