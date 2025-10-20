function F2(a4, a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    const v11 = new ArrayBuffer(128, { maxByteLength: 1024 });
    const v13 = new Uint16Array(v11);
    v13.fill(-2.0);
}
new F2(128, 128, F2, F2);
