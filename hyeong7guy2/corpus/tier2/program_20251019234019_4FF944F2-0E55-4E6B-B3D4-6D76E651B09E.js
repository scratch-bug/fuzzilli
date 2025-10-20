function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function F3(a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        function f7() {
            function f8(a9) {
                const v10 = [];
                v10[11] = Infinity;
                const v11 = v10[4];
                v11 / v11;
            }
            f8();
            f8();
            %OptimizeMaglevOnNextCall(f8);
            return f8;
        }
        Object.defineProperty(this, "toString", { get: f7 });
    }
    const v15 = new F3(F3, F3);
    class C16 {
        static [v15](a18, a19, a20) {
        }
    }
}
new F0();
