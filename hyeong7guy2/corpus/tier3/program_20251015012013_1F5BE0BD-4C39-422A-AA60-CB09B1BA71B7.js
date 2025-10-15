function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    try {
        new F0(a3, F0);
    } catch(e5) {
        function f7() {
            return F0;
        }
        WebAssembly.instantiateStreaming(a2, e5, a2).catch(f7);
    }
}
new F0();
