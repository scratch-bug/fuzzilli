function f1() {
    return WebAssembly;
}
WebAssembly.instantiateStreaming().catch(f1);
const v19 = Uint8Array.of(166, 160, 208, 218, 6, 53, 48, 143, 244, 86, 181, 69, 29, 66);
v19.toHex(WebAssembly, Uint8Array, 53, v19);
