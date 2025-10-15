function f12(a13) {
    return a13;
}
try { new Uint8Array(...f12, this, false); } catch (e) {}
function f19() {
    return f12;
}
WebAssembly.instantiateStreaming("NFD", "toResizableBuffer", this).catch(f19);
