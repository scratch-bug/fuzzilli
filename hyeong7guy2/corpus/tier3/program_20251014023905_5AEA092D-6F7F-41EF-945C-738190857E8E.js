function f1() {
    return 3;
}
const v6 = new SharedArrayBuffer(10, { maxByteLength: 65537 });
const v8 = new Int8Array(v6);
v8.toString = f1;
v8[7] = v8;
