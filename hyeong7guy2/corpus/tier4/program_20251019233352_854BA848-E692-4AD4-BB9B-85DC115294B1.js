function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = new SharedArrayBuffer(512);
    const v7 = new Float64Array(v5);
    v7[45];
}
new F0();
