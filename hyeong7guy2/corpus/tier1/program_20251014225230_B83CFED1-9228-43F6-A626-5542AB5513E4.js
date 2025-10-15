function f1() {
    return WebAssembly;
}
WebAssembly.instantiateStreaming(WebAssembly).catch(f1);
function F4() {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7) {
        const v8 = { ...this };
        try { v8.load(this); } catch (e) {}
        return f6;
    }
    f6(f6);
}
new F4();
