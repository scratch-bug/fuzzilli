function f0() {
    const v3 = new SharedArrayBuffer(10);
    const v5 = new Int8Array(v3);
    v5.fill(f0);
    return v3;
}
const v7 = class extends f0 {
}
new v7();
