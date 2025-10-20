function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            function f8() {
                ("p").link(a3, "p", f8);
                for (let v11 = 0; v11 < 5; v11++) {
                    function f12(a13, a14) {
                        return F1;
                    }
                }
            }
            const v15 = f8();
            v15 >> v15;
            let v17 = `string${536870912n}undefined`;
            v17 >>>= v17;
            return f6;
        }
        f6(f6);
        f6();
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v20 = new F1();
v20.toString(v20, v20, F1, 536870912n, v20);
