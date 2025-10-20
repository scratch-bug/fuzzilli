function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function F6(a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        function f10() {
            function f11(a12) {
                function F13(a15, a16) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                try { a12(f11, f10); } catch (e) {}
                const v18 = typeof this;
                function F20(a22, a23) {
                    if (!new.target) { throw 'must be called with new'; }
                    eval();
                }
                v18 === "number";
                return "number";
            }
            f11(f11);
            %OptimizeMaglevOnNextCall(f11);
            return f11;
        }
        Object.defineProperty(this, "toString", { get: f10 });
    }
    const v28 = new F6(a4, a3);
    class C29 {
        static [v28](a31, a32, a33) {
        }
    }
}
new F0(F0, F0, F0, F0);
