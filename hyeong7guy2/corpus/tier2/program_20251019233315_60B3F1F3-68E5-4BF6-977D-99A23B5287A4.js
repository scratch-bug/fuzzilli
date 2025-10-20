Symbol.toString = Symbol;
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    a5.nanoseconds = a4;
    const t4 = Temporal.Duration;
    const v8 = new t4();
    v8.toLocaleString(a4, a5);
}
try { new F2(Symbol, Set); } catch (e) {}
