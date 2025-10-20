function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function F5(a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
        const v9 = {};
        const v13 = [JSON.stringify(v9)];
        Reflect.apply(JSON.parse, v9, v13);
        const v16 = this.constructor;
        try { new v16(); } catch (e) {}
    }
    new F5();
}
new F0();
