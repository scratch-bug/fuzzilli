async function f0(a1, a2) {
    for (let i5 = 0, i6 = 10;
        (() => {
            const v8 = i5-- / i5;
            function f9(a10) {
                return v8;
            }
            return v8;
        })();
        ) {
    }
    await f0;
    return a1;
}
f0(f0, f0());
%OptimizeFunctionOnNextCall(f0);
