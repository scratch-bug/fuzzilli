function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            function f8() {
                ("p").link(a3, "p", f8);
                for (let v11 = 0; v11 < 5; v11++) {
                    function f12(a13, a14) {
                        return a13;
                    }
                }
            }
            const v15 = f8();
            const v16 = v15 >> v15;
            const v17 = `string${536870912n}undefined`;
            const v19 = new Uint32Array(v17, v16);
            const v20 = v19.length;
            v20 - v20;
            return v17.normalize();
        }
        f6.call();
        f6(a4);
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v25 = new F1(536870912n, 536870912n);
v25.toString();
