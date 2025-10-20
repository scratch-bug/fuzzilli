const v1 = Intl.v8BreakIterator;
const v2 = v1(v1, Intl, v1, v1, v1);
function f4() {
    try { (-128).setUTCHours(v2); } catch (e) {}
    return v2;
}
f4();
f4();
%OptimizeFunctionOnNextCall(f4);
f4();
