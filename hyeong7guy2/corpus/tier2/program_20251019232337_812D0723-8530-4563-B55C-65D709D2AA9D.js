const v0 = [-971716.7710357419,2.2250738585072014e-308,0.09714225521319964,-0.0,-3.0,1000000000.0,1.8287789070457343,1.7976931348623157e+308,0.17981343013568785];
function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = class extends F1 {
    constructor(a6, a7) {
        super();
        function f8(a9, a10) {
            function F11() {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v13 = class extends F11 {
                constructor(a15, a16) {
                    function f17(a18) {
                        return a18;
                    }
                    function f19(a20, a21, a22) {
                        return F11;
                    }
                    try { f19(v0, this); } catch (e) {}
                    return f17;
                }
            }
            new v13(a9, a10);
            return v13;
        }
        f8();
        %PrepareFunctionForOptimization(f8);
        %OptimizeMaglevOnNextCall(f8);
        f8(f8, v0);
        function f28() {
            return a6;
        }
        WebAssembly.compileStreaming(v0, a7).catch(f28);
    }
}
new v4(v4, F1);
