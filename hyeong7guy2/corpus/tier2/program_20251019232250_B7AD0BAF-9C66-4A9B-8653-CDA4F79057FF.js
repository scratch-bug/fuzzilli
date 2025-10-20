function F2() {
    if (!new.target) { throw 'must be called with new'; }
    this.toPlainDateTime();
}
const v5 = class {
}
function f6() {
    const v8 = Temporal.ZonedDateTime;
    Reflect.construct(F2, v8, v8);
    return v8;
}
Object.defineProperty(v5, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f6 });
try { new Int32Array(v5); } catch (e) {}
