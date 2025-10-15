const v1 = new Int8Array();
function f2(a3) {
    const v8 = new SharedArrayBuffer(257, { maxByteLength: 65537 });
    const v10 = new Uint8ClampedArray(v8);
    v10[71] = v10;
    return a3;
}
Object.defineProperty(v1, "valueOf", { configurable: true, enumerable: true, value: f2 });
v1[8] = v1;
