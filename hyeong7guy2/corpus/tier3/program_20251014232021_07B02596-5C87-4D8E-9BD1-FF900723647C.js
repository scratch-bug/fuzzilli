async function f1(a2, a3) {
    const v5 = -1 ?? a2;
    -(v5 & v5);
    await -65535n;
    return -65535n;
}
f1(f1(f1, -65535n), f1);
%OptimizeFunctionOnNextCall(f1);
