function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            function f8() {
                try { ("p").link(); } catch (e) {}
                for (let v11 = 0; v11 < 5; v11++) {
                    function f12(a13, a14) {
                        return a14;
                    }
                }
            }
            const v15 = f8();
            v15 >> v15;
            const v18 = (`string${536870912n}undefined`).charAt();
            return v18 == v18;
        }
        f6(f6);
        f6();
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v22 = new F1(F1, F1);
v22.toString();
