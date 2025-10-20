function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = Date.prototype.toLocaleString;
    try { v7.apply(a3); } catch (e) {}
}
new F1(-3);
