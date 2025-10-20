const v2 = [-5.0,1.4376596673058993e+308,-2.2250738585072014e-308,1000000000000.0,2.0,3.0,-72.61462476929853,2.2250738585072014e-308];
function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = class extends F3 {
    constructor(a8, a9) {
        super();
        function f10(a11, a12) {
            const v13 = -9223372036854775807 | a12;
            function F15(a17, a18) {
                if (!new.target) { throw 'must be called with new'; }
                function f19(a20, a21, a22) {
                    v2.length %= 2.2250738585072014e-308;
                    return a9;
                }
                f19(a12, arguments);
            }
            new F15(F15, v13);
            return F15;
        }
        f10();
        %PrepareFunctionForOptimization(f10);
        %OptimizeMaglevOnNextCall(f10);
        f10();
        function f28() {
            return F3;
        }
        WebAssembly.compileStreaming().catch(f28);
    }
}
new v6(F3, v2);
