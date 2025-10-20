function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    try {
        function F5(a7, a8) {
            if (!new.target) { throw 'must be called with new'; }
            const v10 = class extends Date {
            }
            const v11 = new v10();
            const v12 = v11.toTemporalInstant();
            v12.fractionalSecondDigits = -5.145403486158203e+307;
            v12.toString(v12);
        }
        new F5(F5, F1);
    } catch(e15) {
    }
}
new F1();
