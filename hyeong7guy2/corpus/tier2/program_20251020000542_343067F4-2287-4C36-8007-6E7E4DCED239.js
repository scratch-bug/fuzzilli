function f0(a1) {
    function f2(a3, a4, a5) {
        return f2;
    }
    const v8 = { type: "function", maxByteLength: a1 };
    const v9 = new Worker(f2, v8);
    v9.postMessage(v8);
    return f0;
}
WebAssembly.instantiateStreaming().catch(f0);
