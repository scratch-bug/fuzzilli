function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v10 = new SharedArrayBuffer(5, { maxByteLength: 1144 });
    const v12 = new Uint8Array(v10);
    v12.slice();
}
new F0(F0, F0, F0, F0);
