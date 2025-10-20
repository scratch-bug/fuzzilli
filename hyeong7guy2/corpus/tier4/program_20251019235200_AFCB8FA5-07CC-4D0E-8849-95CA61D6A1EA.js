function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6) {
        return a6;
    }
    const v7 = f5.constructor;
    try { v7("🙌🏿"); } catch (e) {}
}
new F1(F1, "🙌🏿");
