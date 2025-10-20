function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = class extends F1 {
    constructor(a6, a7) {
        super();
        %PrepareFunctionForOptimization(42340);
        function f9() {
            return a6;
        }
        WebAssembly.compileStreaming(v4).catch(f9);
    }
}
new v4();
