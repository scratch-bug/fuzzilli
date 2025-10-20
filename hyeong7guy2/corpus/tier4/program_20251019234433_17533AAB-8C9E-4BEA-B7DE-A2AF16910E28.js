function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function F6(a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        const v10 = { month: "M" };
        const v12 = JSON.stringify(v10);
        const v14 = [v12];
        Reflect.apply(JSON.parse, v10, v14);
        const v17 = this.constructor;
        try { new v17(v12, a5, a8); } catch (e) {}
    }
    new F6(F1, F1);
}
new F1();
