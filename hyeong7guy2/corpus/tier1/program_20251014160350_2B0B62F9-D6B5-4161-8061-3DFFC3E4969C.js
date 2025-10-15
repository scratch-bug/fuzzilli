function f1() {
    const v4 = class extends Temporal.Duration {
    }
    new v4();
    return ArrayBuffer;
}
ArrayBuffer.valueOf = f1;
new ArrayBuffer(ArrayBuffer);
