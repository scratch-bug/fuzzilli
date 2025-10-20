function f0() {
    const v5 = new ArrayBuffer(7, { maxByteLength: 13 });
    const v7 = new Int8Array(v5);
    Worker.apply(Int8Array, v7);
    return f0;
}
try { f0(); } catch (e) {}
