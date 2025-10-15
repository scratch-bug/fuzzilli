function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function F6(a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        function f10() {
            function f11(a12) {
                try { a12(); } catch (e) {}
                return typeof this === "number";
            }
            f11(f11);
            %OptimizeMaglevOnNextCall(f11);
            return f11;
        }
        Object.defineProperty(this, "toString", { get: f10 });
    }
    const v18 = new F6();
    class C19 {
        static [v18](a21, a22, a23) {
        }
    }
}
new F0();
