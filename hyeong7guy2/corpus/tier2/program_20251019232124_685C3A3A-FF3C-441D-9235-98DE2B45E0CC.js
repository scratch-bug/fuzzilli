const v0 = [0.20021129847505803,-1000000000000.0,-2.0,-1.7976931348623157e+308,813.3737142099253];
function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = class extends F1 {
    constructor(a6, a7) {
        super();
        function f8(a9, a10) {
            function F12(a14, a15) {
                if (!new.target) { throw 'must be called with new'; }
                const v18 = Date.prototype.getMonth;
                try { v18.call(a14); } catch (e) {}
                function f20(a21, a22, a23) {
                    return a21;
                }
                f20(a10, arguments);
            }
            const v25 = new F12(F12);
            const t18 = v25.constructor;
            const v27 = new t18(v0);
            return v27;
        }
        f8();
        %PrepareFunctionForOptimization(f8);
        %OptimizeMaglevOnNextCall(f8);
        f8(F1, f8);
        function f31() {
            return f31;
        }
        WebAssembly.compileStreaming(v0, v4).catch(f31);
    }
}
new v4();
