function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function f2() {
    return f2;
}
const v3 = class extends F0 {
    constructor(a5, a6) {
        super();
        function f7(a8, a9) {
            function F10(a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v14 = new F10();
            v14.constructor = f2;
            return F10;
        }
        f7(f7(a6, v3), a5);
        f7();
        const v18 = f7();
        const v19 = f7(a6, F0);
        %OptimizeMaglevOnNextCall(f7);
        f7(v19, f7);
        function f22() {
            return v18;
        }
        WebAssembly.compileStreaming(WebAssembly, a6).catch(f22);
    }
}
new v3(F0, v3);
