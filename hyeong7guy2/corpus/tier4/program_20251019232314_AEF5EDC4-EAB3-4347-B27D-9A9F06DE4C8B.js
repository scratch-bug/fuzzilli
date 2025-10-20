function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function f8() {
            return f8;
        }
        return ([-Infinity]).reduceRight(f8);
    }
    f4(a2, F0, this);
    %OptimizeFunctionOnNextCall(f4);
}
new F0();
new F0();
new F0();
