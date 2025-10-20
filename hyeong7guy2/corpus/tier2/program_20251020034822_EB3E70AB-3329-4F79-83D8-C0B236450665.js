class C0 {
}
new Uint8Array();
function f5() {
}
WebAssembly.instantiateStreaming().catch(f5);
function F8(a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    function F12(a14, a15) {
        if (!new.target) { throw 'must be called with new'; }
        function f16() {
            function f17(a18) {
                const v21 = Array(2937);
                v21.g = v21;
            }
            f17();
            %OptimizeMaglevOnNextCall(f17);
            return f17;
        }
        f16.call();
        Object.defineProperty(this, "toString", { get: f16 });
    }
    const v24 = new F12();
    class C26 {
        static [v24](a28, a29, a30) {
        }
    }
}
new F8();
