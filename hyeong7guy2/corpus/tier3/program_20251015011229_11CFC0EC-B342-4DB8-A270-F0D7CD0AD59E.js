function f1() {
    return -2050672946;
}
function f2(a3) {
    const v8 = new SharedArrayBuffer(3, { maxByteLength: 1000 });
    const v10 = new Uint8Array(v8);
    v10.toString = f1;
    v10[0] = v10;
    return -2050672946;
}
f2.call(f1, -2050672946, -2050672946);
