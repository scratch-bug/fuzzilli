function f1() {
    return 1e-15;
}
const v6 = new SharedArrayBuffer(10, { maxByteLength: 65537 });
v6.grow(65537);
const v9 = new Int8Array(v6);
v9.toString = f1;
v9[7] = v9;
