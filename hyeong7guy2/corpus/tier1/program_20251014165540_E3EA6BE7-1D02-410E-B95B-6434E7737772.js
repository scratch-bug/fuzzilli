function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8) {
        return "🙌🏿";
    }
    this.valueOf = f6;
    const t6 = Temporal.Instant;
    new t6(this);
}
try { new F0(F0, F0, F0, F0); } catch (e) {}
