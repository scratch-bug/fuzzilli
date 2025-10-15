function f0() {
    return f0;
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
}
function f3(a4) {
    Object.defineProperty(Temporal, "overflow", { writable: true, configurable: true, value: f0 });
    const v6 = Temporal.PlainDate;
    return v6.from({}, Temporal);
}
Object.defineProperty(F1, Symbol.iterator, { configurable: true, enumerable: true, value: f3 });
class C11 {
}
try { new C11(F1, ...F1); } catch (e) {}
