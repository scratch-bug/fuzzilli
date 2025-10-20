const v0 = [-1,9007199254740992,65537];
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = class extends F2 {
    constructor(a7, a8) {
        super();
        function f9(a10, a11) {
            v0[255] **= -33396;
            a10 | a11;
            function F14(a16, a17) {
                if (!new.target) { throw 'must be called with new'; }
            }
            new F14(arguments);
            return a10;
        }
        f9.apply(F2, a8);
        const v20 = f9();
        %OptimizeMaglevOnNextCall(f9);
        f9(F2, F2);
        function f23() {
            return v20;
        }
        WebAssembly.compileStreaming(v0, v5).catch(f23);
    }
}
new v5();
