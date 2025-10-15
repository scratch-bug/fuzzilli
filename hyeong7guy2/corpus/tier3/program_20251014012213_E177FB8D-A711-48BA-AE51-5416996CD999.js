async function f0(a1) {
    await Promise;
    Error();
    return Error;
}
f0(f0(f0));
%OptimizeMaglevOnNextCall(f0);
