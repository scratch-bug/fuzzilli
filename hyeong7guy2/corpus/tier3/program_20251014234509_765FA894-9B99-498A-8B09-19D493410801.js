function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const v11 = new ArrayBuffer(165, { maxByteLength: 1024 });
    const v13 = new Uint16Array(v11);
    v13.fill(-1e-15);
}
new F1(-1e-15, -1e-15, F1, F1);
