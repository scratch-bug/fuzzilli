const v0 = [];
function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function F6(a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        const v10 = { era: v0 };
        const v14 = [JSON.stringify(v10)];
        Reflect.apply(JSON.parse, v10, v14);
        const v17 = this.constructor;
        try { new v17(); } catch (e) {}
    }
    new F6();
}
new F1(F1, v0, v0);
