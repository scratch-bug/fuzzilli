function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v8 = new ArrayBuffer(6, { maxByteLength: 6 });
    const v10 = new Int32Array(v8);
    v10[0] = v10;
}
new F0(F0, F0);
