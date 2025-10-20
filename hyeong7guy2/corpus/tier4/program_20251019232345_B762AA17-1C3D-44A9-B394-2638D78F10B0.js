function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    new Date(a4);
}
try { new F1(-65537n, -65537n); } catch (e) {}
