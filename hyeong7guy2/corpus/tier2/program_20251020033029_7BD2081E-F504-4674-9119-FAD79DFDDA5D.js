function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = Temporal.Duration;
    Object.defineProperty(v6, "fractionalSecondDigits", { value: Map });
    const v7 = new v6(a3, a4, a4, a4, a4);
    v7.toString(v6);
}
try { new F1(); } catch (e) {}
