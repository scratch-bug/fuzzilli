function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    a2 % a2;
    const v4 = this.constructor;
    try { new v4(this); } catch (e) {}
}
const v6 = new F0();
new F0(v6);
