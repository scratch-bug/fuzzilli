async function f1(a2, a3) {
    const v4 = a2 + a2;
    await -65535n;
    ([6])[v4];
    return -65535n;
}
f1();
f1();
%OptimizeFunctionOnNextCall(f1);
