const v2 = new Uint8Array(37828618);
function f4() {
    return WebAssembly;
}
const v6 = WebAssembly.instantiateStreaming(WebAssembly).catch(f4);
for (let v7 = 0; v7 < 500; v7++) {
}
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    function F13(a15, a16) {
        if (!new.target) { throw 'must be called with new'; }
        function f17() {
            function f18(a19) {
                Array.a = Array;
                const v22 = Array(2937);
                v22.g = v22;
            }
            f18();
            %OptimizeMaglevOnNextCall(f18);
            return f18;
        }
        f17.call(a15);
        Object.defineProperty(this, "toString", { get: f17 });
    }
    const v25 = new F13(f4, a12);
    class C28 {
        static [v25](a30, a31, a32) {
        }
    }
}
new F9(v2, v6);
