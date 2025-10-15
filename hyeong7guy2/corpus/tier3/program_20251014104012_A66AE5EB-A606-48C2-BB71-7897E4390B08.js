function f2() {
    return 1000000000.0;
}
ArrayBuffer.toString = f2;
const v4 = new ArrayBuffer(ArrayBuffer);
new DataView(v4, DataView, 4096);
