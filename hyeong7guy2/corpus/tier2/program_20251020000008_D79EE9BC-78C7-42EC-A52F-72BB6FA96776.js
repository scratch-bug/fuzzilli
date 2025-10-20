function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    Object.defineProperty(Temporal, "minute", { configurable: true, enumerable: true, value: -1n });
    Temporal.PlainDateTime.from(Temporal);
}
try { new F1(); } catch (e) {}
