function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            (typeof f6).codePointAt(0.9377673248756544);
            return f6;
        }
        f6();
        f6(a4);
        %OptimizeFunctionOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v12 = new F1(F1, F1);
v12.toString();
