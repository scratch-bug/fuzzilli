const t0 = Temporal.PlainDate;
const v3 = new t0(6, 6, 6);
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8(a9, a10, a11) {
        return a10;
    }
    f8(a6, v3);
    %OptimizeFunctionOnNextCall(F4);
}
const v13 = new F4();
const v14 = new F4(6, Temporal);
const t12 = v14.constructor;
new t12(v14, v13, v14, v3);
