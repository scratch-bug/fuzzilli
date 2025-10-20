function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = new SharedArrayBuffer(1000);
    const v8 = new Int8Array(v6);
    v8.fill(SharedArrayBuffer);
}
new F0();
