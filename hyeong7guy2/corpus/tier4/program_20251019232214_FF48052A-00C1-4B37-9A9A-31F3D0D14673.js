function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    try {
        Uint8Array.fromBase64("o");
    } catch(e7) {
    }
}
new F1(Uint8Array, Uint8Array);
