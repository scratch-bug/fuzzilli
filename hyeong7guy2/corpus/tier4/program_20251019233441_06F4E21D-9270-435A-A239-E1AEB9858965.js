const v0 = [64];
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        return f6;
    }
    const v9 = WebAssembly.compileStreaming().then(Uint32Array, f6);
    function F10(a12, a13, a14, a15) {
        if (!new.target) { throw 'must be called with new'; }
        for (let i17 = 0; i17 < 20000; i17++) {
            v0[1] = 2;
            Array(v0[1]);
        }
    }
    new F10(v0, F1, F1, v9);
}
new F1();
