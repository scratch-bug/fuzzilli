function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    function F3(a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        function f7() {
            const v8 = %WasmArray();
            return this;
        }
        new Worker(f7, { type: "function" });
    }
    new F3();
}
new F0(F0);
new F0();
