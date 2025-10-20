function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.constructor.from(this);
}
const v6 = class {
}
function f7() {
    const v9 = Temporal.ZonedDateTime;
    Reflect.construct(F1, v9, v9);
    return Temporal;
}
Object.defineProperty(v6, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f7 });
try { new Int32Array(v6); } catch (e) {}
