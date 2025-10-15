function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    try { this(); } catch (e) {}
    eval();
}
new F0(F0, F0);
class C8 {
}
