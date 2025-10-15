function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = this.constructor;
    try { new v4(); } catch (e) {}
    this in this;
    for (let v7 = 0; v7 < 5; v7++) {
    }
}
new F0();
