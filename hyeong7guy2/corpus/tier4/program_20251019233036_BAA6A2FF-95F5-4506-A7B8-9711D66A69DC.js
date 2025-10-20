async function f0(a1, a2) {
    for (let i5 = 0, i6 = 10; i6++, i6; i6--) {
        i6--;
    }
    await f0;
    return a1;
}
f0(f0, f0);
f0();
%OptimizeFunctionOnNextCall(f0);
