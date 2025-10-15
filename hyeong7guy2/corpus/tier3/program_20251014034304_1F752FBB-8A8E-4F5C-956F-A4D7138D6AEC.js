function F0() {
    if (!new.target) { throw 'must be called with new'; }
    new Uint8ClampedArray(268435441);
    const v5 = %WasmArray();
}
new F0();
