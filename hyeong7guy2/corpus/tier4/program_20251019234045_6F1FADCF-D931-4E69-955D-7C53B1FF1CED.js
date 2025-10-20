function f3() {
    const v5 = Temporal.Duration;
    try {
        const v6 = { milliseconds: 3124 };
        const t3 = Temporal.Duration;
        const v8 = new t3(129);
        v5.compare(v6, v8);
    } catch(e10) {
    }
    return 129;
}
ArrayBuffer.valueOf = f3;
new ArrayBuffer(ArrayBuffer);
