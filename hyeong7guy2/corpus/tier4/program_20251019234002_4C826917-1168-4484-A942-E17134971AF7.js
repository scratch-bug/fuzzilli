function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function F4(a6, a7, a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        const v13 = new BigUint64Array(1005758570);
        v13.fill(-65537n);
    }
    new F4(F0, F4, F0, F0);
}
new F0();
