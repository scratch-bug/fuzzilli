function f1() {
    return 1938535306;
}
const v6 = new ArrayBuffer(143, { maxByteLength: 251 });
const v8 = new Int16Array(v6);
v8.valueOf = f1;
v8[58] = v8;
