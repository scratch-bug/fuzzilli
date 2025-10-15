function f1() {
    return f1;
}
f1[Symbol.toPrimitive] = f1;
function F4() {
    if (!new.target) { throw 'must be called with new'; }
}
function f6(a7) {
    Object.defineProperty(Temporal, "overflow", { writable: true, configurable: true, value: f1 });
    const v9 = Temporal.PlainDate;
    v9.from({}, Temporal);
    return v9;
}
Object.defineProperty(F4, Symbol.iterator, { configurable: true, enumerable: true, value: f6 });
try {
const t0 = "some";
new t0(F4, ...F4);
} catch (e) {}
