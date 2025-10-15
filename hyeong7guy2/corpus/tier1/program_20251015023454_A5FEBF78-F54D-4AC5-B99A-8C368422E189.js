function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function F2(a4, a5) {
        if (!new.target) { throw 'must be called with new'; }
        function f6() {
            function f7(a8) {
                Array().at();
            }
            f7(f7);
            %OptimizeMaglevOnNextCall(f7);
            return f7;
        }
        Object.defineProperty(this, "toString", { get: f6 });
        f6();
    }
    const v14 = new F2(F0, F2);
    class C15 {
        static [v14](a17, a18, a19) {
        }
    }
}
new F0();
