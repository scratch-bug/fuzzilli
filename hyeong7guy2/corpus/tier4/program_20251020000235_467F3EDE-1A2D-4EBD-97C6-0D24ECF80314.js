class C1 {
}
const v3 = new Float64Array();
function F5(a7) {
    if (!new.target) { throw 'must be called with new'; }
}
const v8 = class extends F5 {
    constructor(a10, a11) {
        super();
        function f12(a13, a14) {
            let v15;
            try { v15 = C1.p(); } catch (e) {}
            try { ("268435440").normalize(1000, ...v3, ...v15); } catch (e) {}
            return Float64Array;
        }
        f12(v3, C1);
        %PrepareFunctionForOptimization(f12);
        %OptimizeMaglevOnNextCall(f12);
        f12(a10, this);
        function f20() {
            return a10;
        }
        WebAssembly.compileStreaming().catch(f20);
    }
}
new v8(Float64Array, 1000);
