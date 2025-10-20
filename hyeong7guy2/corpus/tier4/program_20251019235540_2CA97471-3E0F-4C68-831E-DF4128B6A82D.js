function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6) {
        return Array.prototype.pop.call(2035);
    }
    function F11(a13, a14) {
        if (!new.target) { throw 'must be called with new'; }
        for (let i = 0; i < 5; i++) {
            f5();
            %OptimizeFunctionOnNextCall(f5);
        }
    }
    new F11();
}
new F0(F0, F0);
