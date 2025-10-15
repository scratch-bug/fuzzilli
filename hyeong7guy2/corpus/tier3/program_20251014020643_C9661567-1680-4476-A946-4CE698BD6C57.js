function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    class C3 {
    }
    const v4 = C3.hasOwnProperty;
    try { v4(a2); } catch (e) {}
}
new F0(F0);
