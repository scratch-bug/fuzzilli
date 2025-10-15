function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = ("n").match(F0);
const v6 = String.prototype.normalize;
try { v6.call(v3); } catch (e) {}
