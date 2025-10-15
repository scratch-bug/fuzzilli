async function f0(a1, a2) {
    Date(a2);
    await f0;
    return Date;
}
f0(f0, f0);
f0();
%OptimizeFunctionOnNextCall(f0);
