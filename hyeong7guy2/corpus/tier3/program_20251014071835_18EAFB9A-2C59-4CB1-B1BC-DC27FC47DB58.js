async function* f0(a1, a2, a3, a4) {
    for (let i7 = 0, i8 = 10;
        (() => {
            new Uint16Array(a1, a2);
            for (const v11 in a4) {
            }
            return i7;
        })();
        ) {
    }
    return await a3;
}
f0().next(f0);
%OptimizeMaglevOnNextCall(f0);
