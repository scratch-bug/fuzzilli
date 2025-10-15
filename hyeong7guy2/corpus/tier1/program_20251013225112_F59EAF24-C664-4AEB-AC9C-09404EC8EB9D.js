function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = this.constructor;
    try { new v5(); } catch (e) {}
    Object.defineProperty(this, "g", { configurable: true, set: WeakSet });
}
new F1();
