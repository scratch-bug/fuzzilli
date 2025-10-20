function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = class extends F0 {
    constructor(a5, a6) {
        super();
        function f7(a8, a9) {
            function F10() {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v12 = class extends F10 {
                constructor(a14, a15) {
                    super();
                    function F17(a19) {
                        if (!new.target) { throw 'must be called with new'; }
                    }
                    const v20 = {};
                    function f21() {
                        return v20;
                    }
                    const v25 = {
                        o(a23, a24) {
                            super[F17] = 12234;
                            return F10;
                        },
                    };
                }
            }
            const v26 = new v12(a8, F0);
            return v26;
        }
        f7(a5, v3);
        %PrepareFunctionForOptimization(f7);
        %OptimizeMaglevOnNextCall(f7);
        f7();
        function f30() {
            return v3;
        }
        WebAssembly.compileStreaming(this).catch(f30);
    }
}
new v3();
