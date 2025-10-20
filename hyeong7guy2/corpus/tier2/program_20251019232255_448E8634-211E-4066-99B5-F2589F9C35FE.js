function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            function f8() {
                for (let v9 = 0; v9 < 5; v9++) {
                    v9 != v9;
                    for (let v11 = 0; v11 < 5; v11++) {
                    }
                    function f12(a13, a14) {
                        return f12;
                    }
                }
            }
            const v15 = f8();
            v15 >> v15;
            const v17 = `string${536870912n}undefined`;
            const v18 = {};
            ++f5;
            for (const v20 in v18) {
            }
            v17.normalize();
            return f6;
        }
        f6(F1);
        f6(a4);
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v24 = new F1(536870912n, 536870912n);
v24.toString();
