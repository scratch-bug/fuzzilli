function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            function f8() {
                ("p").link(a3, "p", f8);
                for (let v11 = 0; v11 < 5; v11++) {
                    function f12(a13, a14) {
                        return v11;
                    }
                }
            }
            const v15 = f8();
            v15 >> v15;
            const v17 = `string${536870912n}undefined`;
            -65537n + -65537n;
            return v17.normalize();
        }
        f6.call();
        f6(F1);
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v23 = new F1(536870912n, 536870912n);
v23.toString();
