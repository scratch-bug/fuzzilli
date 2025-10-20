function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.until(F1, this, F1, Symbol);
}
const v5 = class {
}
function f6() {
    const v8 = Temporal.ZonedDateTime;
    Reflect.construct(F1, v8, v8);
    return v8;
}
Object.defineProperty(v5, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f6 });
try { new Int32Array(v5); } catch (e) {}
