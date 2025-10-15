const v0 = class {
    255;
}
new v0();
const v2 = new v0();
new v0();
function f4() {
    return v2;
}
const v7 = new Map();
v7.constructor = Symbol;
function F8(a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    Object.defineProperty(this, "constructor", { writable: true, configurable: true, enumerable: true, value: f4 });
    a10.e = v7;
}
function f12() {
    return Map;
}
function f13(a14) {
    const v19 = { alphabet: "base64url", lastChunkHandling: "stop-before-partial" };
    const v21 = new Uint8Array(162);
    v21.setFromBase64("uRDe_c8wM4w5l6k1VLVj1HFvzVZIsIjYDDCUWdJ7lifcQEwNIV-Pj0R8wZTpV-sVZR5T-DKPZ543WZor8Ih0_Wvo-G59NS-RUsjNYFRz1f4=", v19);
    return a14;
}
Object.defineProperty(F8, "e", { get: f12, set: f13 });
new F8(F8);
const v24 = v7.constructor;
try { new v24(); } catch (e) {}
