function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v10 = new ArrayBuffer(9, { maxByteLength: 9 });
    const v12 = new Uint32Array(v10);
    v12.indexOf(9);
}
new F0();
