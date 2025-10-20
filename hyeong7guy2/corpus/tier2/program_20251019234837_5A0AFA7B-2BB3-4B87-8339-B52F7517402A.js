class C4 {
    static {
        function F9(a11, a12) {
            if (!new.target) { throw 'must be called with new'; }
            function f13() {
                function f14(a15) {
                    for (let v18 = 0; v18 < 5; v18++) {
                        `object${2.2250738585072014e-308}d${v18 === 3}number`;
                    }
                    return undefined;
                }
                f14();
                f14(Set);
                %OptimizeMaglevOnNextCall(f14);
                return f14;
            }
            Object.defineProperty(this, "toString", { get: f13 });
        }
        const v23 = new F9();
        class C24 {
            static [v23](a26, a27, a28) {
            }
        }
    }
}
