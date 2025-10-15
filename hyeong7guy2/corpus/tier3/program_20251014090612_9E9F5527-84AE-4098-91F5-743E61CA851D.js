async function f0(a1, a2) {
    return await Math.sign(a1);
}
f0(f0, f0());
%OptimizeFunctionOnNextCall(f0);
