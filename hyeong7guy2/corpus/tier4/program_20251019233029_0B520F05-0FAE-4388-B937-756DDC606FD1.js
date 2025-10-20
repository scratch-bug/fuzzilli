function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = F1.constructor;
    try { v5("5n1"); } catch (e) {}
}
new F1("5n1", "5n1");
