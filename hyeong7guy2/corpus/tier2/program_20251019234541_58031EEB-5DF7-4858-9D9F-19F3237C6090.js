function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = class extends F0 {
    constructor(a5, a6) {
        super();
        function f7(a8, a9) {
            function F10(a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
                function F14(a16, a17, a18, a19) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                class C20 extends F14 {
                    constructor(a22, a23, a24, a25) {
                        super();
                        try { a25(); } catch (e) {}
                    }
                }
                new C20();
            }
            new F10();
            return a8;
        }
        f7();
        %PrepareFunctionForOptimization(f7);
        %OptimizeMaglevOnNextCall(f7);
        f7(a5, F0);
        function f32() {
            return f32;
        }
        WebAssembly.compileStreaming().catch(f32);
    }
}
new v3(F0, v3);
