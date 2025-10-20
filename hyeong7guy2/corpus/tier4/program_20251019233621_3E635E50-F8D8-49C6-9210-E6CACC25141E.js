const v5 = new ArrayBuffer(512, { maxByteLength: 1638 });
const v7 = new Int32Array(v5);
function f8() {
    return -1000000000000.0;
}
v7[Symbol.toPrimitive] = f8;
v7[52] = v7;
