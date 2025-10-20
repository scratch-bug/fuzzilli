function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = new SharedArrayBuffer(1444505642, { maxByteLength: 2147483649 });
    v6.byteLength;
}
new F0();
