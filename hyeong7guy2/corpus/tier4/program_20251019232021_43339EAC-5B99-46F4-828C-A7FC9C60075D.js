function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v9 = { maxByteLength: 1579265341 };
    let v10 = 8;
    v10++;
    const v12 = new ArrayBuffer(v10, v9);
    const v14 = new Uint8ClampedArray(v12);
    new Uint8Array(v14);
}
new F0(F0, F0, F0, F0);
