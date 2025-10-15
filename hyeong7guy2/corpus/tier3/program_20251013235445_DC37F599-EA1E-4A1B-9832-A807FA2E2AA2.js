gc({ execution: "async" });
function f4() {
    return f4;
}
WebAssembly.instantiateStreaming().catch(f4);
