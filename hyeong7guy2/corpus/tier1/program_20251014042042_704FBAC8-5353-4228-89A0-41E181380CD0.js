function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7) {
        const v8 = [Infinity];
        v8.true = v8;
        for (let v9 = 0; v9 < 5; v9++) {
            v8[v9 < 20000] &= Infinity;
        }
        return a7;
    }
    this.constructor = f5;
    const t11 = this.constructor;
    t11();
}
new F1();
