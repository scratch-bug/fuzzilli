function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v8 = new SharedArrayBuffer(7, { maxByteLength: 399316725 });
    const v10 = new Int16Array(v8);
    v10.indexOf();
}
new F0(F0, F0);
