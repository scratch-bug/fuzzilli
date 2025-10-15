function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7) {
        const v8 = [Infinity,Infinity,Infinity,Infinity];
        for (let i10 = 0;
            (() => {
                const v12 = i10 < 20000;
                v8[v12] &= Infinity;
                return v12;
            })();
            i10++) {
        }
        return a6;
    }
    this.constructor = f5;
    const t15 = this.constructor;
    t15();
}
new F1(F1, F1);
