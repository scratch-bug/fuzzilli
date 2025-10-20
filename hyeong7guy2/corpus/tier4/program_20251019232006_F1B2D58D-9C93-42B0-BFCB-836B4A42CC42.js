function f0() {
    const v5 = new SharedArrayBuffer(128, { maxByteLength: 4294967296 });
    const v7 = new BigInt64Array(v5);
    for (let v8 = 0; v8 < 5; v8++) {
        v7[9] = v8;
    }
    return f0;
}
try { f0(); } catch (e) {}
