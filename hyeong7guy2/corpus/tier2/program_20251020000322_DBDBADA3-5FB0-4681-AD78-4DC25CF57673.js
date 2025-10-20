function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = class extends F0 {
    constructor(a5, a6) {
        super();
        function f7(a8, a9) {
            const v10 = a9 | a9;
            function F12(a14, a15) {
                if (!new.target) { throw 'must be called with new'; }
                function F16(a18, a19, a20, a21) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                class C22 extends F16 {
                    constructor(a24, a25, a26, a27) {
                        super();
                    }
                }
                new C22();
                function f29(a30, a31, a32) {
                    return F12;
                }
                f29(a9, arguments);
            }
            new F12(F12, v10);
            return a5;
        }
        const v35 = f7();
        %PrepareFunctionForOptimization(f7);
        %OptimizeMaglevOnNextCall(f7);
        const v36 = f7(v35, this);
        function f38() {
            return v36;
        }
        WebAssembly.compileStreaming().catch(f38);
    }
}
new v3(v3, F0);
