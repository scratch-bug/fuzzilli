function f1() {
    const v3 = Temporal.Duration;
    const v4 = new v3();
    v4.days;
    return v3;
}
ArrayBuffer.valueOf = f1;
new ArrayBuffer(ArrayBuffer);
