function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            eval();
            const v9 = typeof f5;
            v9.replaceAll();
            v9.codePointAt();
            return a2;
        }
        f5(a3);
        f5();
        %OptimizeFunctionOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v14 = new F0(F0, F0);
v14.toString(F0, v14, v14, v14, v14);
