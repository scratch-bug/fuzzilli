async function* f0(a1, a2, a3, a4) {
    for (let i7 = 0, i8 = 10;
        (() => {
            const v9 = i7 < i8;
            new Uint16Array(a1, a2, i8);
            return v9;
        })();
        i7++) {
    }
    await a3;
    return f0;
}
f0(f0, f0, f0, f0).next();
%OptimizeMaglevOnNextCall(f0);
