function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v9 = Array();
            v9[0] = 0.18788900528768115;
            return v9;
        }
        f6();
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    f5();
    Object.defineProperty(this, "toString", { get: f5 });
}
const v12 = new F1();
v12.toString();
