function f0(a1, a2) {
    return f0;
}
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    class C7 {
    }
    function F8(a10) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v11 = class extends F8 {
        constructor(a13, a14) {
            super();
            function f15(a16, a17) {
                const v18 = a17 | a17;
                function F20(a22, a23) {
                    if (!new.target) { throw 'must be called with new'; }
                    function f24(a25, a26, a27) {
                        class C28 {
                            static [f0](a30, a31, a32) {
                            }
                        }
                        return a25;
                    }
                    f24(a17, arguments);
                }
                new F20(C7, v18);
                return a16;
            }
            f15(F3, a13);
            %PrepareFunctionForOptimization(f15);
            %OptimizeMaglevOnNextCall(f15);
            f15();
            function f38() {
                return a14;
            }
            WebAssembly.compileStreaming().catch(f38);
        }
    }
    new v11();
}
new F3(F3, F3);
