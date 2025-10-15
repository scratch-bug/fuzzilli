function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = new ArrayBuffer(127, { maxByteLength: 127 });
    const v8 = new Uint16Array(v6);
    new Int16Array(v8);
}
new F0();
