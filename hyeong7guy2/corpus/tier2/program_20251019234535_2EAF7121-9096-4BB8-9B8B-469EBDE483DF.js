function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function F6(a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        const v10 = -Infinity;
        const v11 = { month: -2672, era: v10 };
        const v15 = [JSON.stringify(v11)];
        Reflect.apply(JSON.parse, v11, v15);
        const v18 = this.constructor;
        try { new v18(); } catch (e) {}
    }
    new F6();
}
new F1(F1, F1, F1);
