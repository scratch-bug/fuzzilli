function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    function F3(a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        function f7() {
            function f8(a9) {
                function F10(a12, a13) {
                    if (!new.target) { throw 'must be called with new'; }
                    const v14 = -F0;
                    v14 >> v14;
                }
                const v16 = new F10();
                const t12 = v16.constructor;
                const v18 = new t12(f7, f8, a6);
                function f19(a20) {
                    return F0;
                }
                Object.defineProperty(v18, "constructor", { configurable: true, value: f19 });
                gc();
            }
            f8();
            f8();
            %OptimizeMaglevOnNextCall(f8);
            return f8;
        }
        Object.defineProperty(this, "toString", { get: f7 });
    }
    const v25 = new F3();
    class C26 {
        static [v25](a28, a29, a30) {
        }
    }
}
new F0();
