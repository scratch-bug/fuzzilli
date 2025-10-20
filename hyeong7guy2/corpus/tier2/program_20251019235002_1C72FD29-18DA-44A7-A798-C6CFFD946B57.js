const v2 = class {
}
function f3() {
    const v5 = Temporal.ZonedDateTime;
    return v5.from({ timeZone: "-22:00" }, "-22:00");
}
Object.defineProperty(v2, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f3 });
try { new Int32Array(v2); } catch (e) {}
