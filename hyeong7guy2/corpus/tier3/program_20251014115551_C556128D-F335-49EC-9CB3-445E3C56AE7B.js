function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = this.constructor;
    try { new v6(); } catch (e) {}
    const v10 = new Proxy(Date, {});
    v10 in v6;
}
new F1(Date, Date, F1);
