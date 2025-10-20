function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        return true;
    }
    ArrayBuffer.toString = f4;
    const v8 = new ArrayBuffer(ArrayBuffer, { maxByteLength: 268435441 });
    const v10 = new Uint8Array(v8);
    v10.reverse();
}
new F0();
