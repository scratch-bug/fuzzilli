function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = Symbol.iterator;
    const v7 = {};
    function F8(a10, a11) {
        if (!new.target) { throw 'must be called with new'; }
        Symbol.for(a11.description);
        const v14 = this.constructor;
        const v16 = [-5,9,16];
        const v18 = new Uint32Array(6);
        v18.set(v16);
        try { new v14(v6, F8); } catch (e) {}
        function f21() {
            return F0;
        }
        const v22 = { f: f21 };
        const v23 = {};
    }
    new F8(v7, v6);
}
const v25 = new F0(F0, F0, F0);
new F0(v25, v25, F0);
