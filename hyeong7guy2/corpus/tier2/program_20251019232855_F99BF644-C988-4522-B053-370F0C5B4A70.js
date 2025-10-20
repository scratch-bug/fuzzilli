function f1() {
    return WebAssembly;
}
WebAssembly.compileStreaming(WebAssembly, f1).catch(f1);
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8() {
        function f9(a10) {
            function F11(a13, a14) {
                if (!new.target) { throw 'must be called with new'; }
                eval(a10);
                this.e = a14;
            }
            const v17 = new F11(f9, a10);
            const v18 = v17.e;
            const v19 = v18 < v18;
            const v20 = v19 && v19;
            const v21 = class {
            }
            return v20;
        }
        f9();
        f9();
        %OptimizeMaglevOnNextCall(f9);
        return f9;
    }
    Object.defineProperty(this, "toString", { get: f8 });
}
const v24 = new F4();
class C25 {
    static [v24](a27, a28, a29) {
    }
}
