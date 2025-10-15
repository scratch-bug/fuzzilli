function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = Symbol.iterator;
    const v7 = {};
    function F8(a10, a11) {
        if (!new.target) { throw 'must be called with new'; }
        Symbol.for(a11.description);
        let v14 = -4294967297;
        v14++;
        const v16 = this.constructor;
        try { new v16(v6, F8); } catch (e) {}
        function f18() {
        }
        const v19 = { f: f18 };
        const v20 = {};
    }
    new F8(v7, v6);
}
new F0(F0, F0, F0);
new F0();
