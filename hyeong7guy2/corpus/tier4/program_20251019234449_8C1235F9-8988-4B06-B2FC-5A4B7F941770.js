function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const v10 = new SharedArrayBuffer(255, { maxByteLength: 2147483649 });
    const v11 = new Float64Array(v10);
    v11[7] = v11;
    new Int8Array(v11);
}
new F3(Float64Array, 255);
