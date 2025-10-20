function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    Object.defineProperty(this, "toString", { get: -32098 });
}
try { new F1(F1, F1); } catch (e) {}
