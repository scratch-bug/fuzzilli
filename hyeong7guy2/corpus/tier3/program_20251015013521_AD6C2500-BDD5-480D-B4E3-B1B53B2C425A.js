function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    const v3 = %WasmArray();
    const v6 = String.prototype.lastIndexOf;
    try { v6.apply(v3); } catch (e) {}
}
new F0();
