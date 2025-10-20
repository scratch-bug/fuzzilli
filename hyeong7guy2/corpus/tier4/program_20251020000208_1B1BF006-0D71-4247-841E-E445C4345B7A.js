const v1 = new Uint8Array();
try {
    const v2 = {};
    v2.alphabet = v2;
    v1.toBase64(v2);
} catch(e4) {
}
