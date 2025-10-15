function f1() {
    return 1000000000.0;
}
ArrayBuffer.toString = f1;
const v3 = new ArrayBuffer(ArrayBuffer);
const v5 = new DataView(v3);
v5.getBigInt64(f1);
