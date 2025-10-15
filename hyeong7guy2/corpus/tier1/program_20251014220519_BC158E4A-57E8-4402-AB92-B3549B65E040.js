function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            eval();
            typeof f5;
            return F0;
        }
        f5(this);
        f5();
        %OptimizeFunctionOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v12 = new F0();
v12.toString();
