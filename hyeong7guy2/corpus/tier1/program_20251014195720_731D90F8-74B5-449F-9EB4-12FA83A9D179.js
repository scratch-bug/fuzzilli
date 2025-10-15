class C0 {
    static {
        function F2(a4, a5) {
            if (!new.target) { throw 'must be called with new'; }
            function f6() {
                function f7(a8) {
                    a8 === a8;
                    let v11;
                    try { v11 = Temporal(a5, f7); } catch (e) {}
                    v11 | v11;
                    eval();
                }
                f7();
                f7(a5);
                %OptimizeMaglevOnNextCall(f7);
                return f7;
            }
            Object.defineProperty(this, "toString", { get: f6 });
        }
        const v17 = new F2(F2, F2);
        class C18 {
            static [v17](a20, a21, a22) {
            }
        }
    }
}
