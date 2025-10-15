const v0 = [];
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            try { a12.reduceRight(a12); } catch (e) {}
        }
        new F9(a8, v0);
        return this;
    }
    f5(this, F1, v0);
    %OptimizeFunctionOnNextCall(f5);
}
const v18 = new F1();
new F1(F1, v18);
new F1();
