function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const v11 = new ArrayBuffer(165, { maxByteLength: 1024 });
    const v13 = new Uint16Array(v11);
    v13.fill(-2.0);
}
new F1(F1, -2.0, -2.0, -2.0);
