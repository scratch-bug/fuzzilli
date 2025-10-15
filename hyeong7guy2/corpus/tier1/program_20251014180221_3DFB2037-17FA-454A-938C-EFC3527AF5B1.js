function f0() {
    function F1(a3, a4) {
        if (!new.target) { throw 'must be called with new'; }
        function f5() {
            function f6(a7) {
                return Temporal instanceof F1;
            }
            f6(a3);
            %OptimizeMaglevOnNextCall(f6);
            return f6;
        }
        Object.defineProperty(this, "toString", { get: f5 });
    }
    const v11 = new F1(F1, F1);
    class C12 {
        static [v11](a14, a15, a16) {
        }
    }
    return F1;
}
f0();
f0();
