const v3 = class {
}
function f4() {
    return Temporal.ZonedDateTime.from(255);
}
Object.defineProperty(v3, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f4 });
try { new Int32Array(v3); } catch (e) {}
