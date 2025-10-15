function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = Symbol.iterator;
    const v7 = {};
    function F8(a10, a11) {
        if (!new.target) { throw 'must be called with new'; }
        Symbol.for(a11.description);
        const v14 = this.constructor;
        try { new v14(v6, F8); } catch (e) {}
        function f16() {
            return a4;
        }
        const v17 = { f: f16 };
        const v18 = {};
    }
    new F8(v7, v6);
}
const v20 = new F0();
new F0(v20, v20, F0);
