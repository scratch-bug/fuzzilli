function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    Object.defineProperty(Date, 2, { value: -705556085n });
}
new F0(F0, F0);
new F0();
