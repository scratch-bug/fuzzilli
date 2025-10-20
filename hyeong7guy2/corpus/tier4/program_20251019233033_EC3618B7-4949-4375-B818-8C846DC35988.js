const t0 = Intl.Segmenter;
const v2 = new t0();
function f3() {
    let v5;
    try { v5 = undefined(v2); } catch (e) {}
    return v5;
}
f3();
f3();
%OptimizeFunctionOnNextCall(f3);
f3();
