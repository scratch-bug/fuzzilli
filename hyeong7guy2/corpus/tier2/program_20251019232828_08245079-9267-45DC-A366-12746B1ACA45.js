function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
function f3() {
    return f3;
}
const v4 = class extends f3 {
    constructor(a6, a7) {
        super();
        function f8(a9, a10) {
            const v11 = a10 | a10;
            function F13(a15, a16) {
                if (!new.target) { throw 'must be called with new'; }
                const v17 = this.constructor;
                try { new v17(F0, F0); } catch (e) {}
                a16++;
                function f20(a21, a22, a23) {
                    return a23;
                }
                f20(a10, arguments);
            }
            new F13(F13, v11);
            return f8;
        }
        f8();
        %PrepareFunctionForOptimization(f8);
        %OptimizeMaglevOnNextCall(f8);
        f8(a7, this);
        function f29() {
            return WebAssembly;
        }
        WebAssembly.compileStreaming(WebAssembly).catch(f29);
    }
}
new v4();
