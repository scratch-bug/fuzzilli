function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function f9(a10, a11) {
            function f12(a13, a14) {
                for (let v15 = 0; v15 < 5; v15++) {
                }
            }
            return f12;
        }
        Symbol.toString = f9;
        function F17(a19, a20) {
            if (!new.target) { throw 'must be called with new'; }
            function f21() {
                function f22(a23) {
                    const v24 = `string${536870912n}undefined`;
                    const t16 = Symbol.toString();
                    t16(Symbol, f21, v24);
                }
                f22();
                f22();
                return f22;
            }
            Object.defineProperty(this, "toString", { get: f21 });
        }
        const v29 = new F17();
        v29.toString();
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
new F0();
new F0();
new F0();
