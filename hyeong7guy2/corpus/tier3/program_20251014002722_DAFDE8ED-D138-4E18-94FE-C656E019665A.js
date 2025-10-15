function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = Date.prototype.setUTCFullYear;
    try { v5.call(this, v5); } catch (e) {}
}
new F0(F0);
