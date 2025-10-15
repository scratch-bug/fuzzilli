function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    Object.defineProperty(Symbol, Symbol, { get: a4.toPrimitive });
}
new F1(F1, F1);
