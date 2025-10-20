async function* f0(a1, a2, a3, a4) {
    for (let v5 = 0; v5 < 5; v5++) {
        const v6 = [Infinity,-4.0,Infinity,4.0,0.08065418639128075,-2.220446049250313e-16];
        let v7;
        try { v7 = v6.forEach(v6); } catch (e) {}
        const v11 = {
            construct(a9, a10) {
                return v7;
            },
        };
    }
    await a3;
    return a3;
}
const v13 = f0();
v13.next(v13);
%OptimizeMaglevOnNextCall(f0);
