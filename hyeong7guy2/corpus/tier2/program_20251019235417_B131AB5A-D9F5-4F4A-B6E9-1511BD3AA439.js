async function f0(a1, a2) {
    try { a2(); } catch (e) {}
    for (let i6 = 0, i7 = 10;
        (() => {
            Math.b = Math;
            let v9 = Math.asin(i6);
            v9++;
            return i7;
        })();
        i7--) {
    }
    await f0;
    return a2;
}
f0(f0, f0);
%OptimizeFunctionOnNextCall(f0);
