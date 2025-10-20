function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = new ArrayBuffer(7, { maxByteLength: 268435441 });
    const v9 = new Uint8Array(v7);
    v9.fill();
}
new F0(F0);
