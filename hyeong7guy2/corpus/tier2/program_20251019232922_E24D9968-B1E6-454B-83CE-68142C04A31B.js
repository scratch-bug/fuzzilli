function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        function F10(a12, a13, a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            function f16(a17) {
                function f18(a19, a20, a21) {
                    const v26 = {
                        9: a13,
                        [Symbol]() {
                        },
                        [a13](a24, a25) {
                        },
                    };
                    return v26;
                }
                f18(a8, a4, a14);
                f18();
                const v29 = f18();
                function F30(a32, a33) {
                    if (!new.target) { throw 'must be called with new'; }
                    f18(this, Infinity, Infinity);
                    f18();
                    f18();
                    f18(Infinity);
                }
                new F30();
                return v29;
            }
            Object.defineProperty(this, "e", { get: Symbol, set: f16 });
            this.e = -1;
        }
        new F10(a6, a7, F10, a7);
        return Symbol;
    }
    f5();
    %OptimizeFunctionOnNextCall(f5);
}
new F1();
const v43 = new F1();
new F1(v43, v43);
