function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            function f9() {
                const v11 = ("p").link(a4, "p", f9);
                for (let v12 = 0; v12 < 5; v12++) {
                    function f13(a14, a15) {
                        return v11;
                    }
                }
            }
            const v16 = f9();
            v16 >> v16;
            const v18 = `string${536870912n}undefined`;
            Temporal.Duration;
            try { this(Symbol, f6, this, v18); } catch (e) {}
            return a5;
        }
        f7(F2);
        f7();
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v24 = new F2(F2, 536870912n);
v24.toString();
