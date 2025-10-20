const v0 = [3.0];
try {
    function F1(a3, a4) {
        if (!new.target) { throw 'must be called with new'; }
        const t4 = Temporal.PlainTime;
        const v7 = new t4();
        v7.smallestUnit = v0;
        v7.toString(v7);
    }
    new F1();
} catch(e10) {
}
