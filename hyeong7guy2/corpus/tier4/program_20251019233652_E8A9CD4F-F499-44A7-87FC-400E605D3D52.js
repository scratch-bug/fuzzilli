function f0(a1) {
    async function f2(a3, a4) {
        for (let i6 = 0, i7 = f0; i6++, i7; -i7, i7--) {
        }
        await f2;
        return a1;
    }
    f2(a1, f0);
    f2(f0, f0);
    %OptimizeFunctionOnNextCall(f2);
    return f0;
}
f0(f0);
