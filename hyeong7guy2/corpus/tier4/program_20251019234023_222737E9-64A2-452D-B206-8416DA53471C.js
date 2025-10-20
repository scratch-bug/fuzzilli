function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    a2--;
    a2--;
    const v5 = this.constructor;
    try { new v5(this); } catch (e) {}
    ~a2;
}
new F0(F0);
new F0();
