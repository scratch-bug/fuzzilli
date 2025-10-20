function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            with (d8) {
                const t5 = test.FastCAPI;
                const v10 = new t5();
                const v11 = { __proto__: v10 };
                v10.get_pointer();
            }
        }
        f5(f5(F0));
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v15 = new F0(F0, F0);
class C16 {
    static [v15](a18, a19, a20) {
    }
}
