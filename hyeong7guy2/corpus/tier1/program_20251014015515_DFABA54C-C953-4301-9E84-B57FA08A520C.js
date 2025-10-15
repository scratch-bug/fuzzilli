const v1 = new Int8Array();
function f2(a3) {
    const v8 = new SharedArrayBuffer(257, { maxByteLength: 65537 });
    try { v8.grow(); } catch (e) {}
    return v8;
}
Object.defineProperty(v1, "valueOf", { configurable: true, enumerable: true, value: f2 });
v1[8] = v1;
