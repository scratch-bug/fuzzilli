function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        this.undefined = this;
        return a2;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v10 = new F0();
new F0(v10, v10);
const v12 = v10.constructor;
new v12(v10, v12);
