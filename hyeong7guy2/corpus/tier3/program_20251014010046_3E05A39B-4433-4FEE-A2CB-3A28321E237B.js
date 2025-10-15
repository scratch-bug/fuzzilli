function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    try { true.groupBy(); } catch (e) {}
}
new F1();
