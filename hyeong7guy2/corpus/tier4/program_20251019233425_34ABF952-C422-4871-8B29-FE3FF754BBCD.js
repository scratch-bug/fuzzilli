function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = F1.constructor;
    t2(a4, a3);
}
try { new F1("delete"); } catch (e) {}
