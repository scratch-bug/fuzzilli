function f0() {
    return f0;
}
const v1 = class extends f0 {
}
const v3 = new Uint8Array();
const v5 = WebAssembly.Module;
try { v5.apply(v1, v3); } catch (e) {}
