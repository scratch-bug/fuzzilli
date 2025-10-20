let v0 = 257;
let v1 = "5";
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = class extends F2 {
    constructor(a7, a8) {
        super();
        function f9(a10, a11) {
            let v12 = arguments;
            [v12,v0,,v1] = v12;
            let v13;
            try { v13 = a11.m(); } catch (e) {}
            function f14() {
                return v13;
            }
            function F15(a17, a18) {
                if (!new.target) { throw 'must be called with new'; }
                function f19(a20, a21, a22) {
                    return f19;
                }
                f19(a11, v12);
            }
            return a8;
        }
        f9(F2, v0);
        %PrepareFunctionForOptimization(f9);
        %OptimizeMaglevOnNextCall(f9);
        f9();
        function f27() {
            return this;
        }
        WebAssembly.compileStreaming().catch(f27);
    }
}
new v5(F2, v1);
