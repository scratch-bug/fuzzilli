const v1 = /((?<!)G)/uy;
try {
    Uint8Array.fromBase64("symbol", "symbol");
} catch(e4) {
    e4.stack.replace(v1, Uint8Array);
}
