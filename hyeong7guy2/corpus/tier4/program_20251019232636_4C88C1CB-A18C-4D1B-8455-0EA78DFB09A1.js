function f3() {
    function f4(a5) {
        function f6(a7) {
            return f6;
        }
        if (f6 < true) {
            return 8;
        } else {
        }
        return f4;
    }
    const v12 = new Worker(f4, { type: "function" });
    return v12;
}
WebAssembly.compileStreaming().catch(f3);
