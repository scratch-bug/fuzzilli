function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = this.constructor;
    t2(746877.8180894954, a5);
}
F1.prototype = F1;
try { new F1(746877.8180894954, F1, F1); } catch (e) {}
