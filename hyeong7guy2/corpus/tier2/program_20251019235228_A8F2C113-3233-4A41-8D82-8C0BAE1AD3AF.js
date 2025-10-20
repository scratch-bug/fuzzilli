function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function F2(a4, a5) {
        if (!new.target) { throw 'must be called with new'; }
        function f6() {
            function f7(a8) {
                Array(1048576).at();
            }
            f7(this);
            %OptimizeMaglevOnNextCall(f7);
            return f7;
        }
        Object.defineProperty(this, "toString", { get: f6 });
        f6();
    }
    const v15 = new F2(F0, this);
    class C16 {
        static [v15](a18, a19, a20) {
        }
    }
}
new F0();
