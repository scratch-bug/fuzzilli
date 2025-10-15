function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            function f9() {
                let v10 = "p";
                v10--;
                for (let v12 = 0; v12 < 5; v12++) {
                    function f13(a14, a15) {
                        return f5;
                    }
                    try { f13(); } catch (e) {}
                }
                return v10;
            }
            const v17 = f9();
            v17 >> v17;
            eval();
            let v20 = 0;
            `string${536870912n}undefined${v20++}setYear`;
            return F1;
        }
        f6();
        f6(F1);
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v25 = new F1(536870912n, F1);
v25.toString();
