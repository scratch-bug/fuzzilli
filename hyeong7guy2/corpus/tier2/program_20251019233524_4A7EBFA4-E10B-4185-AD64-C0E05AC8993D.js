class C0 {
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            const v9 = Symbol.dispose;
            const v11 = {
                [v9]() {
                },
            };
            const v12 = ++C0;
            v12 % v12;
            using v14 = v11;
            eval();
        }
        f7();
        f7();
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v19 = new F2(Symbol, Symbol);
class C20 {
    static [v19](a22, a23, a24) {
    }
}
