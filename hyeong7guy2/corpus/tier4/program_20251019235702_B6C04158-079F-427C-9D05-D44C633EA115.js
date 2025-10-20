function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v8 = new SharedArrayBuffer(11, { maxByteLength: 11 });
    const v10 = new Float64Array(v8);
    v10.fill();
}
new F0();
