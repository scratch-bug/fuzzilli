function F1() {
    if (!new.target) { throw 'must be called with new'; }
}
F1.size = -5.0;
const v4 = new Set();
try { v4.difference(F1); } catch (e) {}
