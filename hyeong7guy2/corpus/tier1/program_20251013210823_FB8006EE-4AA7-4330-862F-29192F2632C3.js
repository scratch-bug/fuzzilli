function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = this.constructor;
    try { new v5(a3); } catch (e) {}
    a3.e = WeakMap;
}
new F1(F1);
