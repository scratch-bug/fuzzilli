async function f0(a1, a2) {
    Math.sign(a1);
    -(-1 ?? a1);
    await f0;
    return f0;
}
f0(f0, f0(f0, f0));
%OptimizeFunctionOnNextCall(f0);
