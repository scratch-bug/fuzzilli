async function f1(a2, a3) {
    const v5 = -128 >>> a2;
    const v6 = v5 / v5;
    v6 >= v6;
    return await -65535n;
}
f1();
f1();
%OptimizeFunctionOnNextCall(f1);
