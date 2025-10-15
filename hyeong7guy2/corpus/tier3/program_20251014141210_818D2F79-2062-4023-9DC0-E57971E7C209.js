function F1(a3, a4, a5) {
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
    }
    new F8(v7, v6);
}
new F1();
new F1();
