function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = this.constructor;
    try { new v7(); } catch (e) {}
    this.e = 3771;
}
new F1();
new F1();
gc({ execution: "async" });
