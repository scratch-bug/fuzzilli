function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = class extends F0 {
    constructor(a5, a6) {
        super();
        function f7(a8, a9) {
            const v11 = [4294967297,268435439,512,128,-4294967295,268435439,-1024,4];
            const v14 = class extends Set {
                static #b = v11;
                constructor(a16, a17, a18, a19) {
                    try {
                        Symbol.#b ^= 536431.5420883021;
                    } catch(e20) {
                    }
                    super();
                }
            }
            const v21 = new v14();
            return v21;
        }
        f7();
        %PrepareFunctionForOptimization(f7);
        %OptimizeMaglevOnNextCall(f7);
        f7();
        function f25() {
            return WebAssembly;
        }
        WebAssembly.compileStreaming().catch(f25);
    }
}
new v3();
