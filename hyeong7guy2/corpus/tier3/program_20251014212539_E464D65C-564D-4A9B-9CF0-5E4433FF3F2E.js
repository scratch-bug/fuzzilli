function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = Symbol.iterator;
    const v7 = {};
    function F8(a10, a11) {
        if (!new.target) { throw 'must be called with new'; }
        Symbol.for(a11.description, a10, a4);
        const v14 = this.constructor;
        try { new v14(v6, F8); } catch (e) {}
    }
    new F8(v7, v6);
}
new F0();
new F0();
