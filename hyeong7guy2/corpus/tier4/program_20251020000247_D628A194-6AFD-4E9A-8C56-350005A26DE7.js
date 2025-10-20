function f1() {
    const v5 = new ArrayBuffer(0, { maxByteLength: 13 });
    const v7 = new Int8Array(v5);
    Worker.apply(Int8Array, v7);
    return f1;
}
try { f1(); } catch (e) {}
