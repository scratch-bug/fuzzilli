function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        for (let v8 = 0; v8 < 5; v8++) {
        }
        this.f >>= -1;
        return F0;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v11 = new F0(F0, F0);
new F0();
new F0(v11, F0);
