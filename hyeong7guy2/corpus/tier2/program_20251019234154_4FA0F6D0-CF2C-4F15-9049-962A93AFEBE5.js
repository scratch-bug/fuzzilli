const v0 = [1.6145556753008068e+308,805424.254752228,NaN,-132710.08433698223,900.2315999000423,2.220446049250313e-16,-4.0,230572.97492185445];
let v2 = Symbol.toPrimitive;
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7(a8, a9, a10) {
        Object.defineProperty(a8, "d", { enumerable: true, value: a6 });
        function F11(a13, a14, a15, a16) {
            if (!new.target) { throw 'must be called with new'; }
            v2 <<= v2;
        }
        new F11();
        return f7;
    }
    try { f7(v0); } catch (e) {}
    %OptimizeFunctionOnNextCall(f7);
}
const v19 = new F3();
const v20 = new F3(v19, F3);
new F3(v20, v19);
