function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v10 = new ArrayBuffer(165, { maxByteLength: 1024 });
    const v12 = new Uint16Array(v10);
    v12[28] = a3;
}
new F0();
