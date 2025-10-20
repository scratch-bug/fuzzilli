function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v9 = Array();
            v9.splice(a3);
            v9[0] = 0.18788900528768115;
            return f5;
        }
        f6();
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    f5();
    Object.defineProperty(this, "toString", { get: f5 });
}
const v13 = new F1(F1, Array);
v13.toString(v13);
