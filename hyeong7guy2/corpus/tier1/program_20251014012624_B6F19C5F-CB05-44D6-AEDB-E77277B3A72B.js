function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    a3.e = Map;
}
function f5() {
    return F1;
}
function f6(a7) {
    const v12 = { alphabet: "base64url", lastChunkHandling: "stop-before-partial" };
    const v14 = new Uint8Array(162);
    v14.setFromBase64("uRDe_c8wM4w5l6k1VLVj1HFvzVZIsIjYDDCUWdJ7lifcQEwNIV-Pj0R8wZTpV-sVZR5T-DKPZ543WZor8I0_Wvo-G59NS-RUsjNYFRz1f4=", v12);
    return "uRDe_c8wM4w5l6k1VLVj1HFvzVZIsIjYDDCUWdJ7lifcQEwNIV-Pj0R8wZTpV-sVZR5T-DKPZ543WZor8I0_Wvo-G59NS-RUsjNYFRz1f4=";
}
Object.defineProperty(F1, "e", { get: f5, set: f6 });
new F1(F1);
