async function f0(a1, a2) {
    Date();
    new Uint8Array();
    await f0;
    return f0;
}
f0(f0(), f0);
%OptimizeFunctionOnNextCall(f0);
