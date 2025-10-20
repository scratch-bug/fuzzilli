function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            function f10(a11) {
                return f5;
            }
            Object.defineProperty(WebAssembly, Symbol.hasInstance, { writable: true, configurable: true, value: f10 });
            false instanceof WebAssembly;
        }
        f6(f6);
        f6();
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v16 = new F1(Symbol, F1);
class C17 {
    static [v16](a19, a20, a21) {
    }
}
