function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = new SharedArrayBuffer(10, { maxByteLength: 268435439 });
    const v9 = new Float64Array(v7);
    v9[0] = v9;
}
new F0(F0);
