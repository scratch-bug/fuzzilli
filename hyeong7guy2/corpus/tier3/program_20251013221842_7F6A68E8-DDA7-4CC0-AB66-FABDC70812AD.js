function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = this.constructor;
    try { new v6(9); } catch (e) {}
    Symbol.for(a4.description);
    const v10 = a5 ?? a5;
    v10 ?? v10;
}
const v12 = new F2(Symbol);
new F2(v12);
