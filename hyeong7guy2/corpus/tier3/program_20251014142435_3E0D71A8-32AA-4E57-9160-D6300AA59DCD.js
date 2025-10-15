function f1() {
    const t1 = Temporal.Duration;
    const v4 = new t1();
    return v4.months;
}
ArrayBuffer.valueOf = f1;
new ArrayBuffer(ArrayBuffer);
