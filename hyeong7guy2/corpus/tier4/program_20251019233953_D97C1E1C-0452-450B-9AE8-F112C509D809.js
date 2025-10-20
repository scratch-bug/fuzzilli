function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v9 = new SharedArrayBuffer(11, { maxByteLength: 11 });
    const v11 = new Float64Array(v9);
    v11.lastIndexOf(1e-15);
}
new F1(F1, F1);
