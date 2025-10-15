function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = {};
    try {
        new F0(a3, F0);
    } catch(e6) {
        try { v4["getPrototypeOf"](); } catch (e) {}
    }
}
new F0(F0, F0);
