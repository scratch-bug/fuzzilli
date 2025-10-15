function F0() {
    if (!new.target) { throw 'must be called with new'; }
    new.target.apply();
}
try { F0.m(F0, F0, F0); } catch (e) {}
