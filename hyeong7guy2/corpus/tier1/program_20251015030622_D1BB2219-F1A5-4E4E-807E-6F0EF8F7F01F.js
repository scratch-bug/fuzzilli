function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function F2(a4, a5) {
        if (!new.target) { throw 'must be called with new'; }
        function f6() {
            function f7(a8) {
                const v11 = f7[4] | 7;
                const v13 = { a: 1.1, imp: v11 };
                return v11;
            }
            f7(this);
            f7();
            %OptimizeMaglevOnNextCall(f7);
            return f7;
        }
        Object.defineProperty(this, "toString", { get: f6 });
    }
    const v16 = new F2(F2, F0);
    class C17 {
        static [v16](a19, a20, a21) {
        }
    }
}
new F0();
