function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function f8() {
            return f8;
        }
        const v9 = [0.3355499447371395];
        v9.reduceRight(f8, v9);
        return this;
    }
    f4(f4, this, F0);
    %OptimizeFunctionOnNextCall(f4);
}
const v12 = new F0(F0, F0);
const v13 = new F0();
new F0(v12, v13);
