function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
F0.prototype = F0;
const v2 = new F0();
const v4 = new Date(F0);
try { v4.setMilliseconds(v2); } catch (e) {}
