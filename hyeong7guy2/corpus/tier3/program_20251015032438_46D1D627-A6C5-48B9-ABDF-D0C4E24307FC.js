function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v8 = new SharedArrayBuffer(64);
    const v10 = new BigInt64Array(v8);
    v10[6];
}
new F0();
