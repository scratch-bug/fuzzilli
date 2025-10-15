let v0 = -4294967297;
function f1(a2) {
    try {
    const t0 = null;
    t0();
    } catch (e) {}
    v0++;
    return f1;
}
f1();
f1();
%OptimizeMaglevOnNextCall(f1);
f1();
