function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        this.g -= -1073741824;
        return F1;
    }
    f5(F1, this, -1073741824);
    %OptimizeFunctionOnNextCall(f5);
}
new F1();
new F1();
new F1();
