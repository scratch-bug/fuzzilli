function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        return F0;
    }
    WebAssembly.instantiateStreaming().catch(f4);
}
new F0(F0, F0);
new F0();
