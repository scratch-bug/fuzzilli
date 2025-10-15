function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function F2(a4, a5) {
        if (!new.target) { throw 'must be called with new'; }
        function f6() {
            function f7(a8) {
                ([F2])[4] | 7;
                Array(1048576);
            }
            f7();
            %OptimizeMaglevOnNextCall(f7);
            return f7;
        }
        Object.defineProperty(this, "toString", { get: f6 });
        f6();
    }
    const v18 = new F2();
    class C19 {
        static [v18](a21, a22, a23) {
        }
    }
}
new F0();
