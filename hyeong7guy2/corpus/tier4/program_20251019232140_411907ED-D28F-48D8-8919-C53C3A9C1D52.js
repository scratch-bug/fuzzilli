const v2 = new Int32Array(182);
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function F7(a9) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v10 = class extends F7 {
        constructor(a12, a13) {
            super();
            function f16() {
                return 182;
            }
            v2.includes(undefined);
            WebAssembly.compileStreaming().catch(f16);
        }
    }
    new v10();
}
new F3(F3, v2);
