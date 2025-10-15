function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F9(a11) {
            if (!new.target) { throw 'must be called with new'; }
            this.g = f4;
            this.g = a11;
        }
        const v12 = new F9(a2);
        v12.length = 2.220446049250313e-16;
        v12.length = a3;
        return this;
    }
    f4(a2, this, this);
    %OptimizeFunctionOnNextCall(f4);
}
new F0();
const v15 = new F0();
new F0(v15, F0);
