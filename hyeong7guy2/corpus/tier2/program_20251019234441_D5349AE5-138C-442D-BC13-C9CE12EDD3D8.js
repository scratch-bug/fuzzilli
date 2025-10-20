class C0 {
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            typeof C0;
            const v10 = Symbol.dispose;
            const v12 = {
                [v10]() {
                },
            };
            using v13 = v12;
            return eval();
        }
        f6(f6(a3));
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v18 = new F1();
class C19 {
    static [v18](a21, a22, a23) {
    }
}
