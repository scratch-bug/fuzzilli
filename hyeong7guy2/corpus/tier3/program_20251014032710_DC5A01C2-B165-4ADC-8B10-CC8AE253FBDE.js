function f0() {
    for (let i2 = 0;
        (() => {
            i2 & i2;
            for (let i5 = 10, i6 = 10; i6; i6--) {
            }
            return i2 < 10000;
        })();
        i2++) {
    }
    return f0;
}
WebAssembly.instantiateStreaming(WebAssembly, WebAssembly, f0).catch(f0);
