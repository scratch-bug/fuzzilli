function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v10 = Uint8Array.of(77, 62, 20, 91, 139);
    v10.toHex(v10, a3, this, Uint8Array);
}
new F0();
