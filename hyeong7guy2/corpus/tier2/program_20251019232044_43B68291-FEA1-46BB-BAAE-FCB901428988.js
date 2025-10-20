const v0 = [];
function f1(a2) {
    function F4(a6) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v7 = class extends F4 {
        constructor(a9, a10) {
            super();
            function f12() {
            }
            WebAssembly.compileStreaming().catch(f12);
        }
    }
    new v7();
    const t14 = 956;
    t14[3] >>>= undefined;
    return f1;
}
const v17 = f1(v0);
function F18(a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    function f22() {
        function f23(a24) {
            v0.forEach(v17);
            return a21;
        }
        f23.call();
        f23();
        %OptimizeMaglevOnNextCall(f23);
        return f23;
    }
    Object.defineProperty(this, "toString", { get: f22 });
}
const v28 = new F18();
class C29 {
    static [v28](a31, a32, a33) {
    }
}
