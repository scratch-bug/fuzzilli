for (let i3 = 0, i4 = 10; i4; i4--) {
}
function F10(a12) {
    if (!new.target) { throw 'must be called with new'; }
}
const v13 = class extends F10 {
    constructor(a15, a16) {
        super();
        function f17(a18, a19) {
            function F20(a22, a23) {
                if (!new.target) { throw 'must be called with new'; }
                let v24 = 2147483649;
                v24++;
                Array(v24);
            }
            new F20(F20, a19, 2288);
            return a16;
        }
        f17();
        %PrepareFunctionForOptimization(f17);
        %OptimizeMaglevOnNextCall(f17);
        f17();
        function f32() {
            return f32;
        }
        WebAssembly.compileStreaming().catch(f32);
    }
}
new v13();
