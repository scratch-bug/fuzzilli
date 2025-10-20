this.onmessage = 255;
this.onmessage = 17;
function F3(a5, a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    function f10() {
        return F3;
    }
    const v12 = WebAssembly.compileStreaming(this, a8).catch(f10);
    function f14() {
        return v12;
    }
    function f15(a16) {
        return a16;
    }
    Object.defineProperty(globalThis, "onmessage", { get: f14, set: f15 });
}
new F3(17, 17, 17, F3);
