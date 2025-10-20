try {
    async function* f0(a1, a2, a3, a4) {
        for (let v5 = 0; v5 < 5; v5++) {
            const v6 = [Infinity,-4.0,Infinity,4.0,0.08065418639128075,-2.220446049250313e-16];
            try { v6.forEach(v6); } catch (e) {}
        }
        return await a3;
    }
    f0(f0, f0, f0, f0).next();
    %OptimizeMaglevOnNextCall(f0);
} catch(e11) {
}
