function f1() {
    const t1 = Temporal.Duration;
    const v4 = new t1();
    ("function").matchAll(v4);
    return f1;
}
ArrayBuffer.valueOf = f1;
new ArrayBuffer(ArrayBuffer);
