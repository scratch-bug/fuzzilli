function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            function f9() {
                ("p").link(a4, "p", f9);
                for (let v12 = 0; v12 < 5; v12++) {
                    function f13(a14, a15) {
                        return "p";
                    }
                }
            }
            const v16 = f9();
            v16 >> v16;
            const v18 = `string${536870912n}undefined`;
            const v19 = Symbol.toString();
            v19.length;
            try { v19(); } catch (e) {}
            return v18.normalize();
        }
        f7();
        f7();
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v25 = new F2(F2, F2);
v25.toString();
