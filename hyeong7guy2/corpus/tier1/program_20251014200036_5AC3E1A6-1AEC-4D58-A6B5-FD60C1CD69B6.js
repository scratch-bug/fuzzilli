function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            function f9() {
                const v11 = ("p").codePointAt();
                -v11;
                return v11;
            }
            f9(129);
            const v14 = eval();
            const v15 = v14 >>> v14;
            v15 / v15;
            return f6;
        }
        f6(a3);
        f6(a3);
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v19 = new F1();
v19.toString();
