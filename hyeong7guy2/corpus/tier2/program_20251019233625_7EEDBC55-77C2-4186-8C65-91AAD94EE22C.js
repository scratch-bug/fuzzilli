function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    try {
        function F4(a6, a7) {
            if (!new.target) { throw 'must be called with new'; }
            const v9 = class extends Date {
            }
            const v10 = new v9();
            const v11 = v10.toTemporalInstant();
            Object.defineProperty(v11, "roundingMode", { value: v11 });
            v11.toString(v11);
        }
        new F4(F4, a2);
    } catch(e14) {
    }
}
new F0();
