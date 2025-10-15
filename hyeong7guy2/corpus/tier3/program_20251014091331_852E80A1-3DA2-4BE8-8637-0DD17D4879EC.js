function f2() {
    const t1 = Temporal.Duration;
    const v5 = new t1();
    let v6;
    try { v6 = v5.round(2); } catch (e) {}
    return v6;
}
ArrayBuffer.valueOf = f2;
new ArrayBuffer(ArrayBuffer);
