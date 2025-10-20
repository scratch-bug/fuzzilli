function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            function f9() {
                try { ("p").valueOf(536870912n, "p"); } catch (e) {}
                for (let v12 = 0; v12 < 5; v12++) {
                    function f13(a14, a15) {
                        return a14;
                    }
                }
            }
            const v16 = f9();
            v16 >> v16;
            const v18 = `string${536870912n}undefined`;
            const v19 = Symbol.length;
            v19 * v19;
            v18.normalize();
            return f6;
        }
        f7();
        f7(F2);
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v24 = new F2();
v24.toString(536870912n, v24);
