function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            typeof Symbol;
            const v9 = Symbol.dispose;
            const v11 = {
                [v9]() {
                },
            };
            using v12 = v11;
        }
        f6(f6());
        eval(a4);
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v17 = new F1();
class C18 {
    static [v17](a20, a21, a22) {
    }
}
