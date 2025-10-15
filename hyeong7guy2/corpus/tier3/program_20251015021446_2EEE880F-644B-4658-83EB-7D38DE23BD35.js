async function f0(a1, a2) {
    for (let [i6, i7] = (() => {
            let v3 = 0;
            v3++;
            return [v3, 10];
        })();
        i7;
        i6--, i6++, i7--) {
    }
    await f0;
    return f0;
}
f0(f0, f0);
f0(f0, f0);
%OptimizeFunctionOnNextCall(f0);
