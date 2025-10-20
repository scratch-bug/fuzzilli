class C0 {
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    try { this.constructor(a4, this, C0); } catch (e) {}
}
F1.prototype = F1;
new F1(F1, C0);
