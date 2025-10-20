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
                        return a14;
                    }
                }
            }
            const v15 = f8();
            const v16 = v15 >> v15;
            const v17 = `string${536870912n}undefined`;
            const v18 = { f: v16 };
            v17.normalize();
            return f6;
        }
        f6();
        f6(a4);
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v22 = new F1();
v22.toString();
