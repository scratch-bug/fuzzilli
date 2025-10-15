function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v9 = new SharedArrayBuffer(1024, { maxByteLength: 4294967296 });
    const v11 = new Uint8Array(v9);
    v11.fill();
}
new F0();
