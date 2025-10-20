const v0 = class {
}
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
                function f17(a18) {
                    function F19(a21, a22) {
                        if (!new.target) { throw 'must be called with new'; }
                    }
                    const v23 = new F19(a18, this);
                    const v24 = v23.constructor;
                    try { v24.apply(v0, v24); } catch (e) {}
                    return f17;
                }
                f17();
                f17(a16);
                function f28(a29, a30, a31) {
                    return a30;
                }
                f28(a10, arguments);
            }
            new F13(F13, v11);
            return F13;
        }
        f8();
        %PrepareFunctionForOptimization(f8);
        %OptimizeMaglevOnNextCall(f8);
        f8(v4, v0);
        for (let i38 = 0, i39 = 10; i39; i39--) {
        }
        function f46() {
            return v0;
        }
        WebAssembly.compileStreaming().catch(f46);
    }
}
new v4(F1, v4);
