function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = class extends F4 {
    static [F0](a9, a10, a11) {
    }
    constructor(a13, a14) {
        super();
        function f15(a16, a17) {
            const v18 = a17 | a17;
            function F20(a22, a23) {
                if (!new.target) { throw 'must be called with new'; }
                function f24(a25, a26, a27) {
                    return this;
                }
                f24 instanceof a14;
                return arguments;
            }
            new F20(F20, v18);
            return a16;
        }
        f15();
        %PrepareFunctionForOptimization(f15);
        %OptimizeMaglevOnNextCall(f15);
        f15(this, a13);
        function f33() {
            return v7;
        }
        WebAssembly.compileStreaming().catch(f33);
    }
}
new v7(v7, v7);
