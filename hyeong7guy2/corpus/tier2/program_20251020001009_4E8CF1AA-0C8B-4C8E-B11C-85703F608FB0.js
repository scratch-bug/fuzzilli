const v0 = [11951,9223372036854775807,536870889,-9,39782];
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            const v19 = {
                construct(a16, a17) {
                    try { a17.find(); } catch (e) {}
                    return a17;
                },
            };
            v19.construct(a8, v0);
            function f22() {
                return Proxy;
            }
            const v23 = new Proxy(f22, v19);
            new v23();
        }
        const v25 = new F9(a7, F1, a8, this);
        return v25;
    }
    f5();
    %OptimizeFunctionOnNextCall(f5);
}
const v27 = new F1();
const t26 = v27.constructor;
new t26();
new F1();
