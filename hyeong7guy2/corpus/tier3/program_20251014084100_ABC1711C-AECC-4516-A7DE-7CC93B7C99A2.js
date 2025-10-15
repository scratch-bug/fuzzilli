function F2(a4, a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    try { new F2(a7, a7, 3691, 1); } catch (e) {}
    d = a4;
}
new F2(F2, 1, 1, 3691);
