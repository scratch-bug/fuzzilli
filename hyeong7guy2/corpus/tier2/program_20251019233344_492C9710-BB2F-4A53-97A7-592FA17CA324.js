function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    try {
        function F5(a7, a8) {
            if (!new.target) { throw 'must be called with new'; }
            function f9(a10, a11) {
                return Symbol;
            }
            this[Symbol.toPrimitive] = f9;
            const v14 = class extends Date {
            }
            const v15 = new v14();
            const v16 = v15.toTemporalInstant();
            v16.smallestUnit = this;
            v16.toString(v16);
        }
        new F5();
    } catch(e19) {
    }
}
new F1();
