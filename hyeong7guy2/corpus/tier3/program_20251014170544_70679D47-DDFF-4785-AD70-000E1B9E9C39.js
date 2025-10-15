async function f0(a1, a2) {
    typeof Math;
    await a1;
    return a1;
}
f0(f0, f0);
f0();
%OptimizeFunctionOnNextCall(f0);
