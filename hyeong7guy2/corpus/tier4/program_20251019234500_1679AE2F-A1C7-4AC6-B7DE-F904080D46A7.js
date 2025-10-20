function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const v10 = new ArrayBuffer(4, { maxByteLength: 3725 });
    const v12 = new Float32Array(v10);
    v12.fill();
}
new F1();
