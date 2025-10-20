const v0 = [0.20021129847505803,-1000000000000.0,-2.0,-1.7976931348623157e+308,813.3737142099253];
function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = class extends F1 {
    constructor(a6, a7) {
        super();
        function f8(a9, a10) {
            const v11 = a10 | a10;
            function F13(a15, a16) {
                if (!new.target) { throw 'must be called with new'; }
                a16 >>> a16;
                function f18(a19, a20, a21) {
                    return F1;
                }
                f18(a10, arguments);
            }
            const v23 = new F13(F13, v11);
            const t18 = v23.constructor;
            new t18(v0, v23);
            return f8;
        }
        f8();
        %PrepareFunctionForOptimization(f8);
        %OptimizeMaglevOnNextCall(f8);
        f8();
        function f29() {
            return v4;
        }
        WebAssembly.compileStreaming(v0, v4).catch(f29);
    }
}
new v4();
