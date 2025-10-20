function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.withTimeZone(this, Symbol, this, Symbol, F1);
}
const v5 = class {
}
function f6() {
    const v8 = Temporal.ZonedDateTime;
    Reflect.construct(F1, v8, v8);
    return Int32Array;
}
Object.defineProperty(v5, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f6 });
try { new Int32Array(v5); } catch (e) {}
