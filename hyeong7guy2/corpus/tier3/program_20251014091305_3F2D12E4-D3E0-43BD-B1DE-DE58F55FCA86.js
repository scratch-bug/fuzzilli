const v2 = { execution: "async" };
gc(v2);
function f5() {
    return v2;
}
WebAssembly.compileStreaming().catch(f5);
