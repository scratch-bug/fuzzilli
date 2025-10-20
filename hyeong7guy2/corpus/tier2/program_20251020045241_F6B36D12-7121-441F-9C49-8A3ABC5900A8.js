function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            function f8() {
                try { ("p").trimEnd(); } catch (e) {}
                for (let v11 = 0; v11 < 5; v11++) {
                    function f12(a13, a14) {
                        return a14;
                    }
                }
            }
            const v15 = f8();
            v15 >> v15;
            const v17 = `string${536870912n}undefined`;
            -65537n % -65537n;
            v17.normalize();
            return F1;
        }
        f6(f6.call(F1, a3, f6, this));
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v23 = new F1();
const v24 = v23.toString;
v24(v24, 536870912n, v24, 536870912n, 536870912n);
