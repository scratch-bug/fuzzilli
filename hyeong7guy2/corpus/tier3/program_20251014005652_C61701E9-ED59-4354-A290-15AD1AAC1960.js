function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    const v3 = this.constructor;
    v3.length;
    try { new v3(F0); } catch (e) {}
    eval();
}
new F0(F0);
new F0();
