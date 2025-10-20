function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v9 = (`string${536870912n}undefined`).codePointAt();
            const v10 = v9 & v9;
            v10 % v10;
            return f6;
        }
        f6(f6);
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    f5();
    Object.defineProperty(this, "toString", { get: f5 });
}
const v14 = new F1();
v14.toString();
