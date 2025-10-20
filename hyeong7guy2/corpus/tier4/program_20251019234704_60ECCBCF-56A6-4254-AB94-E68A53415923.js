const t0 = Temporal.PlainYearMonth;
const v3 = new t0(12, 12);
function f5() {
    try { WeakSet.setUTCMilliseconds(v3); } catch (e) {}
    return v3;
}
f5();
f5();
%OptimizeFunctionOnNextCall(f5);
f5();
