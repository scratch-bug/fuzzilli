function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            function f8() {
                const v10 = ("p").link(a3, "p", f8);
                for (let v11 = 0; v11 < 5; v11++) {
                    function f12(a13, a14) {
                        return v10;
                    }
                }
            }
            const v15 = f8();
            v15 >> v15;
            const v17 = `string${536870912n}undefined`;
            ([-1.3627030661649108e+307,680473.7032090442,257.625992409535,-0.895760134841046,0.19987537436654312]).push(v17);
            return f8;
        }
        f6();
        f6(f5);
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v22 = new F1(F1, F1);
v22.toString();
