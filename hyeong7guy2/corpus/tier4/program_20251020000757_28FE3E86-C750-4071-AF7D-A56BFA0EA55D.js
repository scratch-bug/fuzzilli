function f1() {
    return -4294967296;
}
const v6 = new SharedArrayBuffer(3, { maxByteLength: 1000 });
const v8 = new Uint8Array(v6);
v8.toString = f1;
v8[2] = v8;
