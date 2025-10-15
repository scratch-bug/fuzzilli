function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = Symbol.iterator;
    const v7 = {};
    function F8(a10, a11) {
        if (!new.target) { throw 'must be called with new'; }
        const v12 = {};
        Symbol.for(a11.description);
        const v15 = this.constructor;
        const v17 = [-5,9,16];
        const v19 = new Uint32Array(6);
        v19.set(v17);
        try { new v15(v6, F8); } catch (e) {}
        function f22() {
            return F8;
        }
        const v23 = { f: f22 };
        const v24 = {};
    }
    new F8(v7, v6);
}
new F0();
new F0();
