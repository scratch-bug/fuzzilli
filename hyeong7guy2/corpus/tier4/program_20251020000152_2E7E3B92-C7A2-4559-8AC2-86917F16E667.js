async function f0(a1, a2) {
    try { a2(); } catch (e) {}
    for (let i6 = 0, i7 = 10;
        (() => {
            try { Math(); } catch (e) {}
            const v10 = Math.tan(i6);
            v10 + v10;
            return i7;
        })();
        i7--) {
    }
    await f0;
    return f0;
}
f0(f0, f0);
%OptimizeFunctionOnNextCall(f0);
