function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v9 = new ArrayBuffer(512, { maxByteLength: 1638 });
    const v11 = new Int32Array(v9);
    v11.indexOf(-9007199254740991);
}
new F1(-9007199254740991, F1);
