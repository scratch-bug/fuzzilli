function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        function F10(a12, a13, a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            function f16() {
                return this;
            }
            function f17(a18) {
                const v20 = new Int8Array(4294967295);
                v20[3164630442];
                for (let v22 = 0; v22 < 5; v22++) {
                }
                return a12;
            }
            Object.defineProperty(this, "e", { get: f16, set: f17 });
            this.e = -1;
        }
        new F10(a7, Int8Array, a6, a3);
        return this;
    }
    f5(Int8Array, this, a3);
    %OptimizeFunctionOnNextCall(f5);
}
const v25 = new F1();
const v26 = new F1(v25, Int8Array);
const v27 = new F1(v26, v25);
function f29() {
    return f29;
}
WebAssembly.compileStreaming(v27, v25).catch(f29);
