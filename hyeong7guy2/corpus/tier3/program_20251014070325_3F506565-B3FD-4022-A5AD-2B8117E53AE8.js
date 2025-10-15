function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    a2.caller;
    const v4 = this.constructor;
    try { new v4(F0); } catch (e) {}
}
new F0(F0);
