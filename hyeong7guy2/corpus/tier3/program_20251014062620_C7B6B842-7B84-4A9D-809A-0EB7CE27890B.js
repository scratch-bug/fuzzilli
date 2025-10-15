for (let v0 = 0; v0 < 100; v0++) {
    function F1(a3, a4, a5) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v6 = new F1(F1, F1, v0);
    try { v6.constructor(); } catch (e) {}
}
