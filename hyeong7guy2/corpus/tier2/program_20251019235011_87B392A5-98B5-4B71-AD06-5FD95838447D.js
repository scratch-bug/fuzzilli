const v0 = [11951,9223372036854775807,536870889,-9,39782];
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            let v15;
            try { v15 = a12.call(a11); } catch (e) {}
            const v20 = {
                construct(a17, a18) {
                    a18[2] = a18;
                    try { a18.find(); } catch (e) {}
                    return a18;
                },
            };
            v20.construct(a8, v0);
            function f23() {
                return F1;
            }
            const v24 = new Proxy(f23, v20);
            new v24(v15);
        }
        new F9(a8, a6, a8, a4);
        const v27 = new F9(a7, F1);
        return v27;
    }
    f5(f5, v0, v0);
    %OptimizeFunctionOnNextCall(f5);
}
const v29 = new F1(v0, v0);
const v30 = v29.constructor;
new v30(v0, v30, v0, v30, F1);
const v32 = v29.constructor;
new v32(v32, v0);
