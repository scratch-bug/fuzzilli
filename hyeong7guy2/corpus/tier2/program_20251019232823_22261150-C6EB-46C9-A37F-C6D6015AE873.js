function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function F6(a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        function f10() {
            function f11(a12) {
                let v13 = a12 >>> a12;
                v13--;
                function F15(a17, a18) {
                    if (!new.target) { throw 'must be called with new'; }
                    Temporal.from(v13);
                }
            }
            %OptimizeMaglevOnNextCall(f11);
            return f11;
        }
        Object.defineProperty(this, "toString", { get: f10 });
    }
    const v21 = new F6();
    class C22 {
        static [v21](a24, a25, a26) {
        }
        static [v21](a28, a29, a30) {
        }
    }
}
new F0(F0, F0, F0, F0);
