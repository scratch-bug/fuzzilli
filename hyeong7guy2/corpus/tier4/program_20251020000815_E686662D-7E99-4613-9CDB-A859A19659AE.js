function f1() {
    const v3 = Temporal.Duration;
    try { v3.compare(); } catch (e) {}
    return v3;
}
ArrayBuffer.valueOf = f1;
new ArrayBuffer(ArrayBuffer);
