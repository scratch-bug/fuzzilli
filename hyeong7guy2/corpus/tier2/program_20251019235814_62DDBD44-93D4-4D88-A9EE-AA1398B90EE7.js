function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        function f8() {
            function f9(a10) {
                const v13 = typeof a10 === "undefined";
                const v20 = {
                    [Symbol]() {
                        const v19 = {
                            [Symbol]() {
                                Math.atan(v13);
                            },
                        };
                    },
                };
            }
            f9(f9);
            f9();
            %OptimizeMaglevOnNextCall(f9);
            return f9;
        }
        Object.defineProperty(this, "toString", { get: f8 });
    }
    const v23 = new F4();
    class C24 {
        static [v23](a26, a27, a28) {
        }
    }
}
new F0();
