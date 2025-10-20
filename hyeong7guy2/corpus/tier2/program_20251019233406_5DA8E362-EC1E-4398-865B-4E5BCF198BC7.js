class C1 extends WeakMap {
    static {
        function F3(a5, a6) {
            if (!new.target) { throw 'must be called with new'; }
            function f7() {
                function f8(a9) {
                    for (let v10 = 0; v10 < 5; v10++) {
                        v10 instanceof FinalizationRegistry;
                    }
                    return a9;
                }
                f8();
                f8();
                %OptimizeMaglevOnNextCall(f8);
                return f8;
            }
            Object.defineProperty(this, "toString", { get: f7 });
        }
        const v15 = new F3(F3, this);
        class C16 {
            static [v15](a18, a19, a20) {
            }
        }
    }
}
