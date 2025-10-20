function f1() {
    return true;
}
ArrayBuffer.toString = f1;
const v5 = new ArrayBuffer(ArrayBuffer, { maxByteLength: 268435441 });
const v7 = new Uint8Array(v5);
new Int32Array(v7);
