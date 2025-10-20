function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.toInstant();
}
const v5 = class {
}
function f6() {
    const v8 = Temporal.ZonedDateTime;
    return Reflect.construct(F1, v8, v8);
}
Object.defineProperty(v5, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f6 });
try { new Int32Array(v5); } catch (e) {}
