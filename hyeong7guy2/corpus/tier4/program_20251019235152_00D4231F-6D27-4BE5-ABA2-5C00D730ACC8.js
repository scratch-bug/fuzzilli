const t0 = Temporal.PlainTime;
const v2 = new t0();
function f3() {
    function F4() {
        if (!new.target) { throw 'must be called with new'; }
        v2.constructor;
    }
    new F4();
    return F4;
}
f3();
f3();
%OptimizeFunctionOnNextCall(f3);
f3();
